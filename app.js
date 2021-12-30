const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I will keep working towards becoming great'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
