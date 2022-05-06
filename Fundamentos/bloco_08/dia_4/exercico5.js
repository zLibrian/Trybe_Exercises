const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// funcao que retorna a quantidade de vezes que uma determinada letra passada via parametro se encontra em determinado array também passado via parametro.

function containsWord(word, array) {
  return array.reduce((accumulator, currentValue) => {
    const splitedWord = currentValue.split('');
    return accumulator + splitedWord.reduce((acc, caracter) => {
      if (caracter === word.toUpperCase() || caracter === word.toLowerCase()) return acc + 1;
      return acc;
    }, 0);
  }, 0);
}
assert.deepStrictEqual(containsWord('a', names), 20);
assert.deepStrictEqual(containsWord('l', ['lll']), 3);
