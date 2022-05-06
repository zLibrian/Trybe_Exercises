function returnTrueOrFalse(num1, num2, num3){
  if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    console.log('Ao menos um numero é par');
    return true; 
  }else{
    console.log('Nenhum valor informado é par');
    return false;
  }
}
console.log(returnTrueOrFalse(2, 3, 3));