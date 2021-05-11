
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomicNumber = (minNumber, maxNumber) => {
  let randomNumber =  Math.ceil(Math.random(minNumber)*maxNumber);
  if (randomNumber < minNumber){
    randomNumber = randomicNumber(minNumber, maxNumber);
  }
  return randomNumber;
}

// Crie uma função que retorna o dano do dragão.
const returnDamage = (obj, personagem, randomNumber) => {
 let damage = obj[personagem].damage = randomNumber;
  return damage;
}

console.log(returnDamage(battleMembers, 'dragon', randomicNumber(15, 50)));
console.log(dragon);
// const returnDrakeDamage = (object, personagem, propriedade) =>(object[personagem][propriedade]);
// console.log(returnDrakeDamage(battleMembers, 'dragon', 'healthPoints'));

// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
// const damage = returnDrakeDamage(battleMembers, 'dragon', 'strength');
// 
// console.log(randomicNumber(15, 50));
// Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.