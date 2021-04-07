function confereTriangulo(ladoA, ladoB, ladoC){
  const triangulo = 180;
  let somaTriangulo = ladoA + ladoB + ladoC;
  let souTriangulo = false; 

  if(ladoA === 0 || ladoB === 0 || ladoC === 0){
    console.log('VAlor nao definido');
  }
  else if(somaTriangulo === triangulo){
    console.log('Sou um triangulo heheheheh');
    souTriangulo = true;
  }
  else{
    console.log('INfelizmente nao sou um tringulo');
  }
  
  return souTriangulo
}
console.log(confereTriangulo(0, 0, 0));