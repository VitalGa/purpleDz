const EventEmitter = require('events');

// Создаем и экспортируем единственный экземпляр EventEmitter
// Все модули будут использовать этот же экземпляр для обмена событиями
module.exports = new EventEmitter();
