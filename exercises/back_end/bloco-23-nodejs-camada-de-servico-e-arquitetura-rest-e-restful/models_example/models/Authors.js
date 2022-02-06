const connection = require('./connection');

const getAll = async () => {
  const [authors] = await connection.execute('SELECT * FROM authors');
  return authors;
};

const createNewAuthor = async ({ name, middleName, lastName }) => {
 await connection.execute(
  'INSERT INTO models_example.authors(nome, nome_do_meio, sobrenome) VALUES (?,?,?)',
  [name, middleName || null, lastName],
  ); 
};

module.exports = { 
  getAll,
  createNewAuthor,
};
