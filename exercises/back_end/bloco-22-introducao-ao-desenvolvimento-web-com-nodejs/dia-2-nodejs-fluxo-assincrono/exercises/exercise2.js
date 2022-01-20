const { recebeNumero } = require('./exercise1')

const geraNumeroAleatorio = (rangeMaximo) => {
  if (typeof(rangeMaximo) !== 'number') return 'Valor inválido!'
return Math.floor(Math.random() * rangeMaximo + 1)
};

const num1 = geraNumeroAleatorio(1);
const num2 = geraNumeroAleatorio(11);
const num3 = geraNumeroAleatorio(100);

recebeNumero(num1, num2, num3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

module.exports = {
  geraNumeroAleatorio,
};