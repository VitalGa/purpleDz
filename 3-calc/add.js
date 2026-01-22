const calculator = require('./calculator')

// Подписываемся на событие 'calculate'
// Когда приходит запрос на вычисление, проверяем, наша ли это операция
calculator.on('calculate', (data) => {
  if (data.operation === 'add') {
    const result = data.num1 + data.num2
    // Эмитим событие с результатом - index.js его обработает
    calculator.emit('result', result)
  }
})

// Экспортируем функцию для обратной совместимости (если нужно)
module.exports = function (a, b) {
    return a + b
}