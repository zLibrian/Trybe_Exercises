const readline = require('readline-sync');

const askName = () => readline.question('Qual o seu nome?\n');

const askWeight = () => readline.questionFloat('Qual o seu peso?\n');

const askHeight = () => readline.questionFloat('Qual a sua altura?\n');

module.exports = {
  askName,
  askWeight,
  askHeight,
};
