
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

//retorna um valor de uma propriedade de um heroi determinado.
const personagem = (objec, heroe, propriedade) => {
  return objec[heroe][propriedade];
}
// console.log(personagem(battleMembers, 'warrior', 'weaponDmg'));

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const randomicNumber = (minNumber, maxNumber) => {
  let randomNumber =  Math.ceil(Math.random(minNumber)*maxNumber);
  if (randomNumber < minNumber){
    randomNumber = randomicNumber(minNumber, maxNumber);
  }
  return randomNumber;
}
// console.log(randomicNumber(15, personagem(battleMembers, 'warrior', 'strength')));

const returnDamage = (personagem, randomNumber) => {
  let propriedade = personagem = randomNumber;
  return propriedade;
}

const DrakeDamage = returnDamage(personagem(battleMembers, 'dragon', 'strength'), randomicNumber(15, personagem(battleMembers, 'dragon', 'strength')));
// console.log(`O dano do dragao foi de: ${DrakeDamage}`);

// // Crie uma função que retorna o dano causado pelo warrior .
// // O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDamage = (strengthPersonagem, weaponPersonagem) => {
  let damage = randomicNumber(strengthPersonagem, (weaponPersonagem * strengthPersonagem));
  return damage;
}
// console.log(warriorDamage(personagem(battleMembers, 'warrior', 'strength'), personagem(battleMembers, 'warrior', 'weaponDmg')));

// // Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
//Nao consegui resolver essa parte sem olhar o gabarito, pois queria algo envolvendo 
const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
    return turnStats;
};

console.log(mageAttack(mage));


