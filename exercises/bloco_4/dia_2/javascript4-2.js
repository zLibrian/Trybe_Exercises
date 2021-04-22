//Exemplos dos videos aula 4.2
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names){
  name = name + 1;
  console.log(name);
}
//part2
let contAst ='';
for(let index = 1; index <= 5; index += 1){
  contAst += '*'; 
  console.log(contAst);
}

//part3
for(let cont = 0; cont <= 5; cont += 1){
  let ast='';
  for(let cont =0; cont <= 5; cont += 1){
    ast +='*'
  }
  console.log(ast);
}
//part4

//numero a ser checado
let number = 11; 
//loop para verificar o numero
for(let cont = 1; cont <= number; cont += 1){
  if ((number % cont) === 0){
    console.log(cont + ': Sou um numero primo');
  }//else{
  //   console.log(cont,'Nao sou primo');
  // }
}


// Exercicios do bloco 4.2, favor rodar cada código de uma só vez, pois estaremos resolvendo um por um.

// 1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// 2-Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
// 3-Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//    A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
// 4-Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let somando = 0;
let media = 0;
for(index of numbers){
    somando += index;
    media = somando / numbers.length
  }
  if(media >= 20){
      console.log('Valor maior ou igual a 20');
    }else{
        console.log('Valor menor que 20');
      }
      
// 5-Utilizando for , descubra qual o maior valor contido no array e imprima-o;
      let numbers = [5, 900, 3, 19, 70, 8, 100, 2, 35, 27];
      let higherNumber = 0;
      
      for(let number of numbers){
        if(number > higherNumber){
          higherNumber = number;
        }
      }
      console.log(higherNumber);
// 6-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
      let numbers = [5, 900, 3, 19, 70, 8, 101, 2, 35, 27];
      let resultado = 0;

      for(let number of numbers){
        if((number % 2) !== 0){
          resultado += 1; 
      }
    }

    if(resultado === 0 ){
      console.log('nao tem numero impar aqui muleke');
    }else {
      console.log('A quantidade de numeros impares dentro desse array é de: ' + resultado);
    }

    // 7-Utilizando for , descubra qual o menor valor contido no array e imprima-o;
    //Resolvido com ajuda do gabarito

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let smallestNumber = 1000;
    
    for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index];
      }
    }
    
    console.log(smallestNumber);

    // 8-Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
    // 9-Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
    let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

for(let number of numbers){
  let resultDivisao = number / 2;
  console.log(resultDivisao);
}

//Exercicio Bonus
//Criando um novo array com o valor da multiplicacao de um numero pelo seu sucessor.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for(let index = 0; index < numbers.length; index += 1){
  let nextIndex = numbers[index + 1];
  if(nextIndex === undefined){
    newNumbers.push(numbers[index] * 2);
    break;
  }
  newNumbers.push(numbers[index] * nextIndex);
}
console.table(newNumbers);