const readline = require('readline-sync');

const askDistance = () => readline.questionInt('Digite a distância em metros\n');
const askTime = () => readline.questionInt('Digite o tempo em minutos\n');

module.exports = {
  askDistance,
  askTime,
};