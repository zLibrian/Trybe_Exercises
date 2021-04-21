function calculaFGTS (salBruto) {
}

let salBruto = 2000;
let salLiquido = 0;
let descontoINSS = 0;
let descontoIR = 0;
const aliquota8 = salBruto + (salBruto * 8/100);

const inss8 = 1556.94;
const inss9 = 2594.92;
const inss11 = 5189.82;
const ir7 = 2826.65;
const ir15 = 3751.05;
const ir22 = 4664.68;

if(salBruto <= inss8){
  descontoINSS = salBruto + (salBruto * 8/100); 
  salLiquido = descontoINSS; 
}else if(salBruto > 1903.98 && salBruto <= inss9){
  descontoINSS = salBruto + (salBruto * 9/100);
  descontoIR = descontoINSS - (descontoINSS * (7.5/100));
  salLiquido = descontoIR;
};


console.log(descontoINSS);