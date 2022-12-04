const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: '123',
    host: "localhost",
    port: 5432,
    database: "keep-db"
})

async function getKeeps() {
    try {
        const result = await pool.query('select * from keeps');
        return result.rows;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getKeeps
}

module.exports = pool