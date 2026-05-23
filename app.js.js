// Тяжёлый скрипт для замедления загрузки

console.log("Скрипт загружен и выполняется...");

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

let heavyArray = [];
for (let i = 0; i < 50000; i++) {
    heavyArray.push({
        id: i,
        value: Math.random() * 1000,
        square: i * i,
        cube: i * i * i,
        sqrt: Math.sqrt(i),
        log: i > 0 ? Math.log(i) : 0
    });
}

let sum = 0;
for (let i = 0; i < heavyArray.length; i++) {
    sum += heavyArray[i].value;
    sum += heavyArray[i].square;
    sum += heavyArray[i].cube;
}

console.log("Обработка завершена. Сумма:", sum);
console.log("Факториал 10:", factorial(10));
console.log("Число Фибоначчи 20:", fibonacci(20));

let primeCount = 0;
for (let i = 0; i < 10000; i++) {
    if (isPrime(i)) primeCount++;
}
console.log("Простых чисел до 10000:", primeCount);

let text = "";
for (let i = 0; i < 1000; i++) {
    text += "Строка номер " + i + ". ";
}
console.log("Длина сгенерированного текста:", text.length);

let resultObject = {};
for (let i = 0; i < 1000; i++) {
    resultObject["key" + i] = {
        data: heavyArray.slice(0, 100),
        processed: true,
        timestamp: Date.now()
    };
}
console.log("Количество ключей в объекте:", Object.keys(resultObject).length);

console.log("Скрипт завершён.");