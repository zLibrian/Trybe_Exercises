
//Adiciona estados de forma dinamica

for (let index of estados){
  let sectionEstados = document.getElementById('states');
  let createDiv = document.createElement('option');
  createDiv.innerText = index;
  createDiv.value = index;
  sectionEstados.appendChild(createDiv);
}
let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

console.log(`Primeira vez que uso templates ${estados}`);
