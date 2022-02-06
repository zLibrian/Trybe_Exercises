const getNewAuthor = ({ name, middleName, lastName }) => {
  const fullName = [name, middleName, lastName].filter((n) => n).join(' ');
  return fullName;
};

module.exports = getNewAuthor;
