const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST ?? 'localhost',
    database: process.env.POSTGRES_DB ,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
})

async function getKeeps() {
    try {
        const result = await pool.query('select * from keep');
        return result.rows;
    } catch (err) {
        console.log(err);
    }
}

async function createKeep(req) {
    try {
        const {title, text} = req.body;
        const result = await pool.query('insert into keep(title, "text") values ($1, $2) returning *;', [title, text]);
        return result.body;
    } catch (err) {
        console.log(err);
    }
}

async function editKeep(req) {
    try {
        const {title, text, id} = req.body;
        const result = await pool.query('update keep set title = $1, text = $2 where id = $3 returning *;', [title, text, id]);
        return result.body;
    } catch (err) {
        console.log(err);
    }
}

async function deleteKeep(id) {
    try {
        const result = await pool.query('delete from keep where id = $1', [id]);
        return result.body;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getKeeps, createKeep, editKeep, deleteKeep
}