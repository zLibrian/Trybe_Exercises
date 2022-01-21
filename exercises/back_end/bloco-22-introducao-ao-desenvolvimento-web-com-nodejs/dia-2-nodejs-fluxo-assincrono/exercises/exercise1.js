// Crie uma função que recebe três parâmetros retorna uma Promise .
const recebeNumero = (num1, num2, num3) => new Promise((resolve, reject) => {
    if (typeof (num1) !== 'number' || typeof (num2) !== 'number' || typeof (num3) !== 'number') {
      reject(Error('Informe apenas números!'));
    }

    const result = (num1 + num2) * num3;

    if (result < 50) reject(Error(`Valor muito baixo ${result}`));
    resolve(result);
  });

module.exports = {
  recebeNumero,
};
