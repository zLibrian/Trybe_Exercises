const express = require('express');
const serializeAuthor = require('../helpers/serializeAuthor');
const { getAll, createNewAuthor } = require('../models/Authors');

const route = express.Router();

const getAllAuthor = async (_req, res) => {
  const data = await getAll();
  if (!data) res.status(400).send('Arquivo nao encontrado');
  const authors = data.map(serializeAuthor);
  res.status(200).json(authors);
};

const createAuthor = async (req, res) => {
  const { name, middleName, lastName } = req.body;
  if (!name || !lastName) return res.status(400).json({ message: 'Nome e sobrenome obrigatorio' });
  const author = { name, middleName, lastName };
  createNewAuthor(author);
  res.status(201).json({ message: 'Autor criado com sucesso ' });
};

route.get('/', getAllAuthor);
route.post('/create', createAuthor);

module.exports = route;
