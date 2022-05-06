// Agora, defina um segundo objeto com a mesma estrutura, as mesmas chaves do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

// Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
let info2 = {
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  personagem: 'Tio Patinhas',
  nota: 'O último MacPatinhas',
};
info['recorrente'] = 'Sim'; 
info2['recorrente'] = 'Sim';
info['Amigo em Comum'] = 'Mickey'; 
info2['Amigo em Comum'] = 'Mickey';

for(let key in info){
  if(info[key] === 'Sim' && info2[key] === info[key]){
    console.log('Ambos recorrentes');
  }else if(info[key] === info2[key]){
    console.log('Somos abiguinhos do mickey');
  }else{
  console.log(info[key], 'e', info2[key]);
}
}


