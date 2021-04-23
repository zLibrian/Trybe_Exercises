//Parte um exercicios de explicacao
let ondeVcTa = document.getElementById('elementoOndeVoceEsta');
let pai = ondeVcTa.parentNode;
ondeVcTa.firstElementChild.innerText = 'Sou o elemento com o ID primeiro filho';
let primeiroFilho = pai.firstElementChild;
primeiroFilhoApartiOndevcTa = ondeVcTa.previousElementSibling;
pai.innerText;
ondeVcTa.nextElementSibling;
pai.lastElementChild.previousElementSibling;

// PArte 2
let criaDiv = document.createElement('div');
criaDiv.innerText = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
pai.appendChild(criaDiv);
ondeVcTa.appendChild(criaDiv);
ondeVcTa.firstElementChild.appendChild(criaDiv);