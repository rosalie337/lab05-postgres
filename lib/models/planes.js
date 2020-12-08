const pool = require('../utils/pool.js');

module.exports = class Plane {
    id;
    manufacturer;
    model;
    range_;
    top_speed;

    constructor(row) {
      this.id = row.id;
      this.manufacturer = row.manufacturer;
      this.model = row.model;
      this.range_ = row.range_;
      this.top_speed = row.top_speed;
    }

    static async insert({ manufacturer, model, range_, top_speed }) {
      const { rows } = await pool.query(
        'INSERT INTO planes (manufacturer, model, range_, top_speed) VALUES ($1, $2, $3, $4) RETURNING *',
        [manufacturer, model, range_, top_speed]
      );
      return new Plane(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query('SELET * FROM planes');

      return rows.map(row => new Plane(row));
    }

    static async findById(id) {
      const { rows } = await pool.query(
        'SELECT * FROM planes WHERE id=$1',
        [id]
      );
      if(!rows[0] throw new Error(`No plane with ${id}`));
      return new Plane(row[0]);
    
    }
    static async update(id, { manufacturer, model, range_, top_speed  }) {
        const { rows } = await pool.query(
            `UPDATE planes
                SET manufacturer=$1,
                model=$2,
                range_=$3,
                top_speed=$4
            `,
            [manufacturer, model, range_, top_speed, id]
        );
        return new Planes(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        'DELETE * FROM planes WHERE id=$1'
          [id]
      );
      return new Plane(rows[0]);
    }
};
