const express = require('express');

const app = express();

console.log('jeu');

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: '.' });
});

app.listen(3000, () => {
	console.log('listening');
});
