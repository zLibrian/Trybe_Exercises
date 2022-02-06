const express = require('express');
const { getBooks, getBookByAuthorId, getBookByBookId } = require('../models/Books');

const route = express.Router();

const getAllBooks = async (_req, res) => {
  const books = await getBooks();
  if (!books) return res.status(400).json({ message: 'Livros nao encontrados' });
  res.status(200).json({ books });
};

const getAllBooksByAuthorId = async (req, res) => {
  const { author_id: authorId } = req.query;
  const authorBooks = await getBookByAuthorId(parseInt(authorId, 10));
  if (authorBooks.length < 1) {
 return res.status(404)
    .json({ message: `Autor com o ID ${authorId} nao existente` }); 
  }
  res.status(200).json(authorBooks);
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  const book = await getBookByBookId(parseInt(id, 10));
  if (book.length < 1) return res.status(404).json({ message: 'Livro nao encontrado' });
  res.status(200).json(book);
};

route.get('/:id', getBookById);
route.get('/search', getAllBooksByAuthorId);
route.get('/', getAllBooks);

module.exports = route;
