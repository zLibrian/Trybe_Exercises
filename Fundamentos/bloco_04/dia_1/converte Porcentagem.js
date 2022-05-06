function convertePorcentagem(porcentagemNota){
  if (porcentagemNota >= 90 && porcentagemNota <=100){
    return 'Sua nota se encaixa no conceito A';
  }else if (porcentagemNota >= 80 && porcentagemNota < 90){
    return 'Sua nota se encaixa no conceito B';
  }else if (porcentagemNota >= 70 && porcentagemNota < 80){
    return 'Sua nota se encaixa no conceito C';
  }else if (porcentagemNota >= 60 && porcentagemNota < 70){
    return 'Sua nota se encaixa no conceito D';
  }else if (porcentagemNota >= 50 && porcentagemNota < 60){
    return 'Sua nota se encaixa no conceito E';
  }else if (porcentagemNota < 50 && porcentagemNota >=0){
    return 'Sua nota se encaixa no conceito F'; 
  }else{
    return 'Valor inválido, tente uma nota entre 0 e 100';
  }

}
console.log(convertePorcentagem(101));