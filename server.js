const express = require('express');
const app = express();
const port = process.env.PORT || 3333;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});