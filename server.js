const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

app.use(express.static('.'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});