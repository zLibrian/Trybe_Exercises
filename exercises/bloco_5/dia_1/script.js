/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      5-Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
      6-Crie uma função que exiba o conteúdo de todas as tags <p> no console.
      */
     //  1-Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
     window.onload = function () {
       changePText('Como eu me vejo daqui 2 anos ?','Eu me vejo sendo um grande programador independente','E muito feliz por essa conquista');
       changeBackgroundColor('rgb(76,164,109');
       changeContentBackgroundColor ('white');
       changeH1Text('Exercício 5.1 - JavaScript');
       changeToUpperCase ();
       showAllPsTag ();
      }
      function changePText (text1, text2, text3) {
        let tagP = document.querySelectorAll('.center-content p');
        tagP[0].innerText = text1;
        tagP[1].innerText = text2;
        tagP[2].innerText = text3;
      }
      // 2-Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      let mainDiv = document.querySelector('.main-content');
      function changeBackgroundColor (colorInRGB){
        mainDiv.style.backgroundColor = colorInRGB;
      }
      // 3-Crie uma função que mude a cor do quadrado vermelho para branco.
      function changeContentBackgroundColor (colorInRGB) {
      const divContent = document.querySelector('.center-content');
      divContent.style.backgroundColor = colorInRGB;
    }
    // 4-Crie uma função que corrija o texto da tag <h1>.
    function changeH1Text (newText){ 
    let h1Text = document.getElementsByClassName ('title');
    h1Text[0].innerText = newText;
  }
  // 5-Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
  function changeToUpperCase () {
    let tagP = document.querySelectorAll('.center-content p'); 
    for (let index = 0; index < tagP.length; index += 1){
      tagP[index].innerText = tagP[index].innerText.toUpperCase();
    }
  }
  function showAllPsTag (nameTag) {
    let element = document.getElementsByTagName(nameTag);
    for (let index of element){
     console.log(index);;
    }
  }
  console.log(showAllPsTag('div'));
  