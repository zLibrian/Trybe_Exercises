// Retorna o maior valor entre 3 numeros

let firstNumber = 100; 
let secondNumber = 120;
let thirdNumber = 160;

if (firstNumber > secondNumber && firstNumber > thirdNumber){
  console.log(firstNumber, 'maior que', secondNumber, 'e', thirdNumber);
}else if (secondNumber > firstNumber && secondNumber > thirdNumber){
  console.log(secondNumber, 'maior que', firstNumber, 'e', thirdNumber);
}else if (thirdNumber > firstNumber &&  thirdNumber > secondNumber){
  console.log(thirdNumber, 'maior que', firstNumber, 'e', secondNumber);
}else {
  console.log('meu deus do ceu berg');
}
