
const button = document.querySelector('.botao');
button.addEventListener('click', () =>{
  document.getElementById("lista").classList.toggle("show");
});

const buttonInformation = document.getElementById('buttonInformation');
buttonInformation.addEventListener('click', () => {
  document.getElementById('bookInformation').classList.toggle('show');
});