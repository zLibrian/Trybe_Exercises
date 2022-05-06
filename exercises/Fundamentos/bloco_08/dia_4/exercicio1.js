
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, [])
}
console.log(flatten(arrays));
// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);