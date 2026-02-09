const path = require('path');

// Импортируем общий EventEmitter - все модули используют этот же экземпляр
const calculator = require('./calculator');

const firstNumber = process.argv[2];
const secondNumber = process.argv[3];
const operation = process.argv[4];

// Валидация входных данных
if (!firstNumber || !secondNumber || !operation) {
    console.log('Usage: node index.js <number1> <number2> <operation>');
    console.log('Operations: add, minus, divide, multiply');
    process.exit(1);
}

// Парсим числа
const num1 = parseFloat(firstNumber);
const num2 = parseFloat(secondNumber);

if (isNaN(num1) || isNaN(num2)) {
    console.log('Error: Both arguments must be valid numbers');
    process.exit(1);
}

// Проверяем, что операция валидна
const validOperations = ['add', 'minus', 'divide', 'multiply'];
if (!validOperations.includes(operation)) {
    console.log('Invalid operation');
    console.log('Available operations: add, minus, divide, multiply');
    process.exit(1);
}

// Подписываемся на событие 'result' - когда модуль операции завершит вычисление
calculator.once('result', (result) => {
    console.log(result);
    // После вывода результата завершаем программу
    process.exit(0);
});

// Подписываемся на событие 'error' для обработки ошибок
calculator.once('error', (errorMessage) => {
    console.error(errorMessage);
    process.exit(1);
});

// Загружаем все модули операций - они сами подпишутся на нужные события
// ВАЖНО: require выполняется синхронно, поэтому все подписки произойдут до emit
require(path.join(__dirname, 'add'));
require(path.join(__dirname, 'minus'));
require(path.join(__dirname, 'divide'));
require(path.join(__dirname, 'multiply'));

// Эмитим событие 'calculate' с данными операции
// Модули операций слушают это событие и обрабатывают, если операция их касается
calculator.emit('calculate', {
    operation: operation,
    num1: num1,
    num2: num2,
});
