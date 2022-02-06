const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
const author = require('./middlewares/author');
const books = require('./middlewares/books');

app.use('/authors', author);
app.use('/books', books);
app.listen(3000, () => console.log('escutando na porta 3000'));
