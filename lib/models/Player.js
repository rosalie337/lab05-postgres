const pool = require('../utils/pool.js');

module.exports = class Player {
    id;
    player;
    team;
    position;
    number_;

    constructor(row) {
      this.id = row.id;
      this.player = row.player;
      this.team = row.team;
      this.position = row.position;
      this.number_ = row.number_;
    }
    
    static async insert({ player, team, position, number_ }) {
      const { rows } = await pool.query(
        'INSERT INTO players (player, team, position, number_) VALUES ($1, $2, $3, $4) RETURNING *',
        [player, team, position, number_]
      );
      return Player(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query('SELECT * FROM players');

      return rows.map(row => new Player(row));
    }

    static async findById(id) {
      const { rows } = await pool.query(
        'SELECT * FROM songs WHERE id=$1',
        [id]
      );

      if(!rows[0]) throw new Error(`No player with that ${id}`);
      return new Player(rows[0]);
    }

    static async update(id, { player, team, position, number_ }) {
      const { rows } = await pool.query(
        `UPDATE players
            SET player=$1,
                team=$2,
                position=$3,
                number_=$4
            WHERE id=$5
            RETURNING *
        `,
        [player, team, position, number_, id]
      );
      return new Player(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        'DELETE FROM players WHERE id=$1 RETURNING *',
        [id]
      );
      return new Player(rows[0]);
    }
};
