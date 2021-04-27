function calculaLucro(custoProduto, valorVenda, quantidadeVenda){
  let impostoSobreOCusto = (custoProduto * 0.20);
  let valorCustoTotal = custoProduto + impostoSobreOCusto;
  let valorLucro = valorVenda - valorCustoTotal;
  let lucroTotal = valorLucro * quantidadeVenda;
  
  if (custoProduto <= 0 || valorVenda <= 0 ){
    return 'Valor inválido';
  }else if(quantidadeVenda >= 0 ){
    let mensagem = ("O valor total da unidade do produto é de: "+ valorCustoTotal + ' reais'+ " e o lucro ao vender " + quantidadeVenda +' unidades é de ' + lucroTotal + " reais");
    return mensagem;
  }
}
console.log(calculaLucro(10, 15, 100));