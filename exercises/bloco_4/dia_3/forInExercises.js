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
  if(info[key] === 'Sim' && info2[key] === 'Sim'){
    console.log('Ambos recorrentes');
  }else if(info[key] === info2[key]){
    console.log('Somos abiguinhos do mickey');
  }else{
  console.log(info[key], 'e', info2[key]);
}
}


