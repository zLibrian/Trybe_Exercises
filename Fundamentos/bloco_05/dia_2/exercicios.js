
//Funcao que cria um elemento html, aplica um texto e classe ou Id a esse elemento criado e no final retorna o elemento formatado. 
function createElementAndText(tagName, texto, classOrId){
  let element = document.createElement(tagName);
  element.innerText = texto;

  if(classOrId.includes('#')){
    element.id = classOrId.slice(1);
  }else if (classOrId.includes('.')){
    element.className = classOrId.slice(1);
  }else {
    return element;
  }

  return element;
}

document.body.appendChild(createElementAndText('h1', 'Exercício 5.2 - JavaScript DOM', '.abrobra loca'));

document.body.appendChild(createElementAndText('div', '', '.main-content'));

let mainContent = document.querySelector('.main-content');
mainContent.appendChild(createElementAndText('div','','.center-content'));

let centerContent = document.querySelector('.center-content');
centerContent.appendChild(createElementAndText('p', 'Testando um dois tres', '.main-content'));

mainContent.appendChild(createElementAndText('div', '', '.left-content'));

mainContent.appendChild(createElementAndText('div', '', '.  right-content'));

let leftContent = document.querySelector('.left-content');
leftContent.appendChild(createElementAndText('img','','small-image'));
leftContent.innerHTML = '<img src="https://picsum.photos/200">';

let rightContent = document.querySelector('.right-content');
rightContent.appendChild(createElementAndText('ul', '', ''));

  let arrayNumber = ['Um','Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
  // for(let index = 0; index < arrayNumber.length; index += 1){
      // let numberPosition = arrayNumber[index];
    // }
    for(number of arrayNumber){
      rightContent.firstChild.appendChild(createElementAndText('li',number,'listItems'));
    }

    function toComSono (quantidade){
      for (let index = 0; index < quantidade; index += 1){
         mainContent.appendChild(createElementAndText('h3','teste',''));
      }
  }
  toComSono(3);
  