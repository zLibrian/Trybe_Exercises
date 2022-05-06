//Captura todos os elementos que possuem a classe emergency-Tasks e armazena em uma variavel;
let emergencyTasks = document.querySelectorAll('.emergency-tasks');
emergencyTasks[0].style.backgroundColor = 'brown';

//Captura todos os elementos H3 que estao em uma div que pertence a classe emergency-tasks e armazena em uma variavel;
let h3EmergencyTasks = document.querySelectorAll('.emergency-tasks div h3');

//Uma das maneiras de mudar a background que eu consegui pensar; 

// for(index = 0; index < h3EmergencyTasks.length; index += 1 ){
  //    teste = h3EmergencyTasks[index];
  //     teste.style.backgroundColor = 'red';
  //   }
  
  // Com o for...of conseguimos percorrer todos os valores de um elemento iteravel, entao declaramos uma variavel fora do for...of para armazenar a posicao do loop e em seguida modificamos essa variavel para adicionar um background colorido ao valor que ela segura. 
  let teste;
  for(let index of h3EmergencyTasks){
    teste = index; 
    teste.style.backgroundColor = "blue";
  }

  //Capturamos todos os H3 dentro das Div's com a classe no-emergency-tasks;
  let h3NoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks div h3');

  //Criamos uma variavel para guardar o valor do array na posicao index (apenas por legibilidade de código). E em seguida usamos um for of para iterar todos os valores do nosso NodeList que nos foi retornado antes.
  let h3NoEmergency; 
  for(let index of h3NoEmergencyTasks){
      h3NoEmergency = index;
      h3NoEmergency.style.backgroundColor = "green";
    }
    //Outra maneira que consegui pensar para percorrer todos os valores e alteralos de forma dinamica;
    // for(let index2 = 0; index2 < h3NoEmergencyTasks.length; index2 += 1){
    //   teste2 = h3NoEmergencyTasks[index2];
    //   teste2.style.backgroundColor = "blue";
    // }

    let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks');
    noEmergencyTasks[0].style.backgroundColor = 'red';

    let footerHtml = document.getElementsByTagName('footer');
    footerHtml[0].style.backgroundColor = 'magenta';