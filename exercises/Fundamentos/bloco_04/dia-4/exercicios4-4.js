

// function verificaPalindromo (palavra){
//   let reverseWord = palavra.split('').reverse().join('');
//   if (reverseWord === palavra){
//     return 'Sou palindromo mermao';
//   }else{
//     return 'OnumSô palindromo nao';
//   }
// }
// console.log(verificaPalindromo('sasasvzxvfgwq'));



// function reverseWords (string){
//   let palindromoInvertido = '';
//   for(let index = string.length-1; index <= string.length && index >= 0 ; index -= 1){
//     palindromoInvertido += string[index];
//   }
//   if(string === palindromoInvertido){
//     return('Sou palindromo');
//   }else{
//     return('Nao sou palindromo');
//   }
// }
// console.log(reverseWords('arara ana'));
function retornaIndiceMaior (array){
  let higherNumber = 0;
  let indexNumber = 0;
//Estamos usando o ForIn pelo fato dele nos proporcionar uma iteracao tanto no indice quanto no valor do indice, facilitando o código e reduzindo as linhas necessarias para resolucao.
//Definimos o numero maior como sendo 0 e em seguida perguntamos se o HigherNumber é maior q o array de numeros na posicao number. 
  for (let number in array){
    if(array[number] > higherNumber){
      higherNumber = array[number];
      indexNumber = number;
    }
  }
  return ('O maior numero é o: ' + higherNumber + ' e o indice dele no array é o: ' + indexNumber);
}
console.log(retornaIndiceMaior([2, 3, 6, 70, 10, 1]));

//Retorna o menor numero e seu indice de acordo com um array que foi passado via parametros.
function retornaMenorIndice (array){

  smallestNumber = 1000; 
  indiceSmallestNumber = 0;

  for(let number in array){
    if (array[number] < smallestNumber){
      smallestNumber = array[number];
      indiceSmallestNumber = number;
    }
  }
  return ('O menor numero encontrado no array foi de: ' + smallestNumber + ' e o indice dele é: ' + indiceSmallestNumber);
  
}
console.log(retornaMenorIndice([2, 4, 6, 7, 10, 0, -3]));

//Cria uma funcao que recebe um array de strigs e retorna o nome que contem a maior quantidade de letras.

//Primeira forma (e a que eu mais gostei);
function maiorNomeDeTodoss(array){
  let maiorNome = '';

  for(let name of array){
    if (name.length > maiorNome.length){
      maiorNome = name; 
    }
  }
  return maiorNome;
  };
  console.log(maiorNomeDeTodoss(['José', 'Lucas', 'JavaScriptÉUmaDelicinha', 'Fernanda', 'Cairo', 'Joana']));

//Segunda maneira.
function maiorNomeDeTodos(array){
let nomeMaior = '';

for(let name in array){
  if (array[name].length > nomeMaior.length){
    nomeMaior = array[name];
  }
}
return nomeMaior;
}
 console.log(maiorNomeDeTodos(['j', 'Lucas', 'Nádia', 'FernandaÉMuitoLegal', 'Cairo', 'Joana']));

//Encontrando o menor numero de um array

function menorNomeDeTodos(array){
  let menorNome = array[0];

  for(let name of array){
    if (menorNome.length > name.length){
      menorNome = name; 
    }
  }
  return menorNome;
  };

  console.log(menorNomeDeTodos(['José', 'Lucas', 'JavaScriptÉUmaDelicia', 'Fernanda', 'Cairo', 'Jo']));
//Retorna a soma de todos os numeros até o valor passado via parametros.
function retornaSomaAteONumeroEspecificado(numero){ 
  cont = 0;
  for (let index = 1; index <= numero; index += 1){
    cont += index; 
  }
  return cont;
}
console.log(retornaSomaAteONumeroEspecificado(10));
