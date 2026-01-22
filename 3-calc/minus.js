const calculator = require('./calculator')

// Подписываемся на событие 'calculate' для операции вычитания
calculator.on('calculate', (data) => {
  if (data.operation === 'minus') {
    const result = data.num1 - data.num2
    calculator.emit('result', result)
  }
})

module.exports = function (a, b) {
    return a - b
}   