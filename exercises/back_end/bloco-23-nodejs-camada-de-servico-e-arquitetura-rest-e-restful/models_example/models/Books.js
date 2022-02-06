const connection = require('./connection');

const getBooks = async () => {
  const [books] = await connection.execute('SELECT * FROM books');
  return books;
};

const getBookByAuthorId = async (authorID) => {
  const query = 'SELECT * FROM books WHERE books.author_id=?';
  const [authorBooks] = await connection.execute(query, [authorID]);
  return authorBooks;
};

const getBookByBookId = async (id) => {
const [book] = await connection.execute('SELECT * FROM books WHERE id=?', [id]);
return book;
};

module.exports = {
  getBooks,
  getBookByAuthorId,
  getBookByBookId,
};