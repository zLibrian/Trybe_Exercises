function xadrez (nomePeca){
  pecaXadrez = nomePeca.toLowerCase(); 
  switch(pecaXadrez){
    case 'bispo':
      return ('Sou a peça ' + nomePeca +  '. Eu posso andar quantas casa quiser nas diagonais');
    break;
    case 'rainha':
      return('Sou a peça ' + nomePeca + ' e eu posso andar quantas casas quiser e para qualquer direção');
      break;
    case 'rei':
      return('Sou a peça '+ nomePeca + ' e eu posso andar apenas uma casa para qualquer direção');
    case 'torre':
      return 'Sou a peça ' + nomePeca + ' e eu posso andar quantas casas quiser na vertical e horizontal';
      break;
    case 'cavalo':
      return 'Sou a peça ' + nomePeca + ' e eu posso andar 2 casas para vertical ou horizontal e posso tambem saltar tantos aliados quanto inimigos';
      break;
    case 'peão':
      return 'Sou a peça ' + nomePeca + '. No inicio posso andar duas casas para frente, mas depois disso apenas uma e eu nao posso retroceder';
      break;
    default:
      return 'Valor inválido, tente novamente';
}
}
console.log(xadrez('a'));