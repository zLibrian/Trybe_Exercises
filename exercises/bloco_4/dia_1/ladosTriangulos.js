function confereTriangulo(ladoA, ladoB, ladoC){
  const triangulo = 180;
  let somaTriangulo = ladoA + ladoB + ladoC;
  let souTriangulo = false; 

  if(ladoA <= 0 || ladoB <= 0 || ladoC <= 0){
    console.log('Valor nao definido, ou negativo');
  }
  else if(somaTriangulo === triangulo){
    console.log('Sou um triangulo');
    souTriangulo = true;
  }
  else{
    console.log('Infelizmente nao sou um tringulo');
  }
  
  return souTriangulo
}
console.log(confereTriangulo(60, 160, 20));