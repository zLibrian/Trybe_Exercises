const questionsIMC = require('./imc_questions');
const { checkIMCSituation } = require('./imcClassificationTable');

const calculateIMC = (weight, height) => (weight / height ** 2).toFixed(2);

const showUserIMC = () => {
  const name = questionsIMC.askName();
  const weight = questionsIMC.askWeight();
  const height = questionsIMC.askHeight();

  const userIMC = calculateIMC(weight, height);
  const imcClassification = checkIMCSituation(userIMC);
  const message = (
    `Hello, ${name}, seu IMC é de ${userIMC} e é classificado como ${imcClassification}`); 
  return message;
};
module.exports = {
  calculateIMC,
  showUserIMC,
};