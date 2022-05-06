const botao = document.getElementById('button');
let contadorNumero = 0;
botao.addEventListener('click', (event) => {
  let contador = document.getElementById('contador');
  contador.innerText = contadorNumero += 1;
})