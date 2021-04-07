

// Fazendo operações aritiméticas usando switch case. 

let firstNumber = 20; 
let secondNumber = 15; 
let arithmeticSigns = '*';

switch (arithmeticSigns){
  case '+':
    console.log(firstNumber + secondNumber);
    break;
  
  case '-':
    console.log(firstNumber - secondNumber);
    break;

  case '*':
    console.log(firstNumber * secondNumber);
    break;  

  case '/':
    console.log(firstNumber / secondNumber);
    break;

  case '%':
    console.log(firstNumber % secondNumber);
    break;
  
  default:
    console.log("Valor inválido");
}