const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

app.use(express.static('.'));

const db = require('database.js');

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/keeps', async (req,res) => {
    const result = await db.getKeeps();
    res.json(result);
})

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});

