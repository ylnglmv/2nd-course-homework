// Задание 1 
let password = 'пароль';
let input = prompt('Введите пароль');

if (password === input) {
    alert('Пароль введен верно');
} else {
   alert('Пароль введен неправильно');
}

// Задание 2 
let c = 5
if (c > 0 && c < 10 ) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3

let d = 55
let e = 78
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4 

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
a = Number (a)
b = Number (b)
alert(a + b);

// Задание 5 

let monthNumber = prompt ('Введине номер месяца')
monthNumber = Number (monthNumber)

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
        break;
    default:
        console.log('Такого месяца не существует');
        break;
}

// Задание 7 
let number = prompt ('Пожалуйста, введите любое число')

if (isNaN (number)) {
    console.log(number);
} else if (number % 2 === 0) {
    alert('число чётное');
} else {
    alert('число нечетное');
}

// Задание 8 и 9 

let clientOS = prompt ('Какая у вас операционная система? Если iOS, то введите цифру 0, есди Android, то цифру 1.')
const iOS = 0
const Android = 1
if (clientOS === iOS) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === Android) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
console.log('Вы ввели неверные данные');
}

const clientDeviceYear = 2015 
let clientDevice = prompt ('В каком году произведён Ваш телефон');

if (clientOS === iOS && clientDevice >= clientDeviceYear) {
    alert ('Установите версию приложения для iOS по ссылке')
} else if (clientOS === Android && clientDevice >= clientDeviceYear) {
    alert ('Установите версию приложения для Android по ссылке')
} else if (clientOS === iOS && clientDevice < clientDeviceYear) {
    alert ('Установите облегченную версию приложения для iOS по ссылке')
} else if (clientOS === Android && clientDevice < clientDeviceYear) {
    alert ('Установите облегченную версию приложения для Android по ссылке')
}