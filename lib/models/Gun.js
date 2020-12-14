const pool = require('../utils/pool.js');

module.exports = class Gun {
    id;
    manufacturer; 
    model; 
    weight_;
    mag_capacity;

    constructor(row) {
      this.id = row.id;
      this.manufacturer = row.id;
      this.model = row.model;
      this.weight_ = row.weight_;
      this.mag_capacity = row.mag_capacity;
    }

    static async insert({ manufacturer, model, weight_, mag_capacity }) {
      const { rows } = await pool.query(
        'INSERT INTO guns (manufacturer, model, weight_, mag_capacity) VALUE ($1, $2, $3, $4) RETURNING *',
        [manufacturer, model, weight_, mag_capacity]
      );
      return new Gun(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query('SELECT * FROM songs');

      return rows.map(row => new Gun(row));
    }

    static async findById(id) {
      const { rows } = await pool.query(
        'SELECT * FROM guns WHERE id=$1',
        [id]
      );

      if(!rows[0]) throw new Error(`No gun with ${id}`);
      return new Gun(rows[0]);
    }

    static async update(id, { manufacturer, model, weight_, mag_capacity }) {
      const { rows } = await pool.query(
        `UPDATE guns
                    SET manufacturer=$1, 
                        model=$2, 
                        weight_=$3, 
                        mag_capacity=$4
                    WHERE id=$5
                    RETURNING *
                `,
        [manufacturer, model, weight_, mag_capacity, id]
      );
      return new Gun(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        'DELETE FROM guns WHERE id=$1 RETURNING *',
        [id]
      );
      return new Gun(rows[0]);
    }
};
