
const factorial = number => {
  let result = 1

  for (let index = 1; index <= number; index += 1) {
      result *= index
  }

  return result
}

console.log(factorial(6))

const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(8))