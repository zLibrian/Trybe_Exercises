function returnTrueOrFalse(num1, num2, num3){
  if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1){
    console.log('Ao menos um numero é impar');
    return true; 
  }else{
    console.log('Nenhum valor informado é impar');
    return false;
  }
}
console.log(returnTrueOrFalse(2, 2, 2));