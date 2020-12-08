const pool = require('../utils/pool.js');

module.exports = class Cloth {
    id;
    designer;
    collection;
    year_;
    price;

    constructor(row) {
      this.id = row.id;
      this.designer = row.designer;
      this.collection = row.collection;
      this.year = row.year;
      this.price = row.price;
    }

    static async insert({ designer, collection, year_, price }) {
      const { rows } = await pool.query(
        'INSERT INTO clothes(designer, collection, year_, price) VALUES ($1, $2, $3, $4) RETURNING *',
        [designer, collection, year_, price]
      );
      return new Cloth(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query('SELECT * FROM clothes');

      return rows.map(row => new Cloth(row));
    }
    
    static async update(id { designer, collection, year_, price }) {
        const { rows } = await pool.query(
            `UPDATE clothes
                SET designer=$1,
                    collection=$2,
                    year_=$3,
                    price=$4.
                WHERE id=$5
                RETURNING *
            `,
            [designer, collection, year_, price, id]
        );
        return new cloth(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        'DELETE FROM clothes WHERE id=$1 RETURNING *',
        [id]
      );
      return new Clothes(rows[0]);
    }
};
