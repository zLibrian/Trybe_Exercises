const serializeAuthor = (authorData) => {
  const fullName = [authorData.nome, authorData.nome_do_meio, authorData.sobrenome]
  .filter((n) => n).join(' ');
  const serialize = {
    id: authorData.id,
    name: authorData.nome,
    middleName: authorData.nome_do_meio,
    lastName: authorData.sobrenome,
    fullName,
    birthday: authorData.data_nascimento,
    nacionality: authorData.nacionalidade,
  };
  return serialize;
};

module.exports = serializeAuthor;