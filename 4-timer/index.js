// Получаем аргумент командной строки (время в формате "1h 5m 10s")
const timeString = process.argv[2]

// Валидация: проверяем, что аргумент передан
if (!timeString) {
  console.log('Usage: node index.js <time>')
  console.log('Example: node index.js "1h 5m 10s"')
  console.log('Example: node index.js "30m"')
  console.log('Example: node index.js "45s"')
  process.exit(1)
}

/**
 * Парсит строку времени в формате "1h 5m 10s" и возвращает общее количество секунд
 * @param {string} str - строка времени (например, "1h 5m 10s")
 * @returns {number} - общее количество секунд
 */
function parseTimeString(str) {
  // Регулярное выражение для поиска чисел с единицами времени
  // (\d+) - одна или более цифр
  // (h|m|s) - буква h, m или s
  // g - флаг для поиска всех совпадений
  const timeRegex = /(\d+)(h|m|s)/g
  
  let totalSeconds = 0
  let match
  
  // Ищем все совпадения в строке
  while ((match = timeRegex.exec(str)) !== null) {
    const value = parseInt(match[1], 10) // число (например, 1, 5, 10)
    const unit = match[2] // единица времени (h, m, s)
    
    // Преобразуем в секунды в зависимости от единицы
    switch (unit) {
      case 'h':
        totalSeconds += value * 3600 // 1 час = 3600 секунд
        break
      case 'm':
        totalSeconds += value * 60 // 1 минута = 60 секунд
        break
      case 's':
        totalSeconds += value // секунды остаются секундами
        break
    }
  }
  
  // Если не найдено ни одного совпадения, значит формат неверный
  if (totalSeconds === 0) {
    throw new Error('Invalid time format. Use format like "1h 5m 10s"')
  }
  
  return totalSeconds
}

/**
 * Форматирует секунды в читаемый формат "HH:MM:SS"
 * @param {number} seconds - количество секунд
 * @returns {string} - отформатированная строка времени
 */
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  
  // Форматируем с ведущими нулями
  const h = hours.toString().padStart(2, '0')
  const m = minutes.toString().padStart(2, '0')
  const s = secs.toString().padStart(2, '0')
  
  return `${h}:${m}:${s}`
}

// Парсим время и получаем общее количество секунд
let remainingSeconds
try {
  remainingSeconds = parseTimeString(timeString)
  console.log(`Таймер установлен на: ${formatTime(remainingSeconds)}`)
  console.log('Таймер запущен...\n')
} catch (error) {
  console.error(`Ошибка: ${error.message}`)
  process.exit(1)
}

// Запускаем таймер с обратным отсчётом
// setInterval вызывает функцию каждую секунду (1000 мс)
const intervalId = setInterval(() => {
  // Выводим оставшееся время, перезаписывая строку (\r возвращает курсор в начало)
  process.stdout.write(`\rОсталось: ${formatTime(remainingSeconds)}`)
  
  // Уменьшаем счётчик
  remainingSeconds--
  
  // Когда время истекло
  if (remainingSeconds < 0) {
    clearInterval(intervalId) // Останавливаем интервал
    process.stdout.write('\n') // Переходим на новую строку
    console.log('🔔 Время звонка истекло!')
    process.exit(0) // Завершаем программу
  }
}, 1000) // Интервал 1000 мс = 1 секунда
