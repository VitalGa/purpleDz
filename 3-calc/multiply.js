const calculator = require('./calculator');

// Подписываемся на событие 'calculate' для операции умножения
calculator.on('calculate', (data) => {
    if (data.operation === 'multiply') {
        const result = data.num1 * data.num2;
        calculator.emit('result', result);
    }
});

module.exports = function (a, b) {
    return a * b;
};
