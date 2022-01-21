const fs = require('fs').promises;

const parsedCharacters = async () => {
  const characters = await (fs.readFile('./simpsons.json', 'utf-8'));
  return JSON.parse(characters);
};

const readCharacters = async () => {
  const characters = await parsedCharacters();
  console.log(characters.map(({ id, name }) => `${id}-${name}`));
};

readCharacters();

// eslint-disable-next-line no-async-promise-executor
const findCharacter = async (id) => new Promise(async (resolve, reject) => {
    const characters = await parsedCharacters();
    const character = characters.find((simpson) => +simpson.id === id);
    if (!character) reject(Error('Id nao encontrado'));
    return resolve(character);
  });
findCharacter(101).then((res) => console.log(res)).catch((err) => console.log(err));

const writeSimpsonsJson = async () => {
  const characters = await parsedCharacters();
  const filteredCharacters = JSON.stringify(characters
    .filter((character) => (+character.id !== 6 && +character.id !== 10)));
  fs.writeFile('./simpsons.json', filteredCharacters);
};

writeSimpsonsJson();
