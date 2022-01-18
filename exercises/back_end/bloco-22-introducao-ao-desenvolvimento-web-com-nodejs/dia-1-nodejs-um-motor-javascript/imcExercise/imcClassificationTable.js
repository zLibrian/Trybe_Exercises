const checkIMCSituation = (IMC) => {
  switch (true) {
    case (IMC <= 18.5):
      return ('Abaixo do peso');

    case IMC >= 18.6 && IMC <= 24.9:
      return ('Peso normal');

    case (IMC >= 25.0 && IMC <= 29.9):
      return ('Acima do peso');

    case (IMC >= 30.0 && IMC <= 34.9):
      return ('Obesidade grau I');

    case (IMC >= 35.0 && IMC <= 39.9):
      return ('Obesidade grau II');

    case (IMC >= 40.0):
      return ('Obesidade grau III');
    default: 
      return 'Valor inválido';
  }
};
module.exports = {
  checkIMCSituation,
};