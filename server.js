const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

app.use(express.static('.'));

const db = require('./database/database.js');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/keeps', async (req, res) => {
    try {
        const result = await db.getKeeps();
        res.json(result);
    } catch(error) {
        res.status(500).end;
    }
});

app.delete('/delete', async (req, res) => {
    const id = req.params.id;
    const deleteKeep = await db.deleteKeep(id);
    res.json(deleteKeep);
});

app.post('/create', async (req, res) => {
    const createKeep = await db.createKeep(req);
    res.json(createKeep);
    return res;
});

app.put('/edit', async (req, res) => {
    const editKeep = await db.editKeep(req);
    res.json(editKeep);
    return res;
});

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});

