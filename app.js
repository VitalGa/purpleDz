import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// 1. Получили путь к текущему ФАЙЛУ (перевели из URL в путь)
const __filename = fileURLToPath(import.meta.url);

// 2. Получили путь к текущей ПАПКЕ
const __dirname = path.dirname(__filename);

// 3. Теперь можем безопасно склеить путь к нашему текстовому файлу
const filePath = path.join(__dirname, 'data.txt');

const content = fs.readFileSync(filePath, 'utf8');
console.log(content);