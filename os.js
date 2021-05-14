const os = require('os');

console.log(`Имя хоста: ${os.hostname()}`);
console.log(`Тип ОС: ${os.type()}`);
console.log(`Платформа: ${os.platform()}`);
console.log(`Версия: ${os.release()}`);
console.log(`Время работы: ${(os.uptime() / 60 / 60).toFixed(2)} часов`);
console.log(`Архитектура процессора: ${os.arch()}`);
console.log(`Кол-во процессоров: ${os.cpus().length}`);
console.log(`Память: ${(os.totalmem() / 1e9).toFixed(2)} GB`);
console.log(`Свободно памяти: ${(os.freemem() / 1e9).toFixed(2)} GB`);