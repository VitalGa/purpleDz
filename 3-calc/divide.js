const calculator = require('./calculator')

// Подписываемся на событие 'calculate' для операции деления
calculator.on('calculate', (data) => {
  if (data.operation === 'divide') {
    // Проверяем деление на ноль
    if (data.num2 === 0) {
      calculator.emit('error', 'Error: Division by zero')
      return
    }
    const result = data.num1 / data.num2
    calculator.emit('result', result)
  }
})

module.exports = function (a, b) {  
    if (b === 0 || b === '0') {
        return 'Error: Division by zero'
    }
    return a / b
}   