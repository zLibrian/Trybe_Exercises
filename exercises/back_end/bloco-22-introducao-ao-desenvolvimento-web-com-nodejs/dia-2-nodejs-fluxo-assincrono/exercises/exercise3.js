const { recebeNumero } = require('./exercise1');
const { geraNumeroAleatorio } = require('./exercise2');

const main = async () => {
  const num1 = geraNumeroAleatorio(1);
  const num2 = geraNumeroAleatorio(11);
  const num3 = geraNumeroAleatorio(100);

  try {
    const result = await recebeNumero(num1, num2, num3);
    console.log(result);
  } catch (error) {
    console.log(error)
  }
}

main();