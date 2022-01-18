const { askDistance, askTime } = require('./distanceQuestions');

const velocidadeMedia = (distancia, tempo) => distancia / tempo;

const calculaVelocidadeMedia = () => {
  const distance = askDistance();
  const time = askTime();

  const avarage = velocidadeMedia(distance, time);
  return `${avarage.toFixed(5)}m/s`;
};

console.log(calculaVelocidadeMedia());

module.exports = {
  calculaVelocidadeMedia,
};