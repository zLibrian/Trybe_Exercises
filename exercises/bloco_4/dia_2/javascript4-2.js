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
for(let cont = 1; cont <=number; cont += 1){
  if ((number % cont) === 0){
    console.log(cont + ': Sou um numero primo');
  }//else{
  //   console.log(cont,'Nao sou primo');
  // }
}