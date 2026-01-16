const path = require('path')

const firstNumber = process.argv[2]
const secondNumber = process.argv[3]
const operation = process.argv[4]

 
if (!firstNumber || !secondNumber || !operation) {
  console.log('Usage: node index.js <number1> <number2> <operation>')
  console.log('Operations: add, minus, divide, multiply')
  process.exit(1)
}

 
const num1 = parseFloat(firstNumber)
const num2 = parseFloat(secondNumber)


if (isNaN(num1) || isNaN(num2)) {
  console.log('Error: Both arguments must be valid numbers')
  process.exit(1)
}

if (operation === 'add') {
  const add = require(path.join(__dirname, 'add'))
  console.log(add(num1, num2))
} else if (operation === 'minus') {
  const minus = require(path.join(__dirname, 'minus'))
  console.log(minus(num1, num2))
} else if (operation === 'divide') {
  const divide = require(path.join(__dirname, 'divide'))
  console.log(divide(num1, num2))
} else if (operation === 'multiply') {
  const multiply = require(path.join(__dirname, 'multiply'))
  console.log(multiply(num1, num2))
} else {
  console.log('Invalid operation')
  console.log('Available operations: add, minus, divide, multiply')
}
