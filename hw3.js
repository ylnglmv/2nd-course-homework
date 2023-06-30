// Задание 1 
let password = 'пароль';
let input = prompt('Введите пароль');
if (password = true) {
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
alert(2 + 3);

// Задание 5 

let monthNumber = prompt ('Введине номер месяца')

switch (monthNumber) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('зима');
        break;
    case 3:
        console.log('весна');
        break;
    case 4:
        console.log('весна');
        break;
    case 5:
        console.log('весна');
        break;
    case 6:
        console.log('лето');
        break;
    case 7:
        console.log('лето');
        break;
    case 8:
        console.log('лето');
        break;
    case 9:
        console.log('осень');
        break;
    case 10:
        console.log('осень');
        break;
    case 11:
        console.log('зима');
        break;
    case 12:
        console.log('зима');
        break;
    default:
        console.log('Такого месяца не существует');
        break;
}

// Задание 7 
let number = prompt ('Пожалуйста, введите любое число')
if (number = number) {
    console.log(number);
} else {
    console.log(NaN);
}
if (number / 2 = % = 0) {
    console.log('число чётное');
} else {
    alert ('Число нечетное');
}

// Задание 8 и 9 
let clientOS = 0 || 1
0 = iOS
1 = Android
if (clientOS = 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('Установите версию приложения для Android по ссылке');
}
let clientDeviceYear = 2015 
clientDeviceYear = prompt ('В каком году произведён Ваш телефон');
if (clientOS = 0 && clientDeviceYear >= 2015) {
    alert ('Установите версию приложения для iOS по ссылке')
} else if (clientOS = 1 && clientDeviceYear >= 2015) {
    alert ('Установите версию приложения для Android по ссылке')
}
if (clientOS = 0 && clientDeviceYear < 2015) {
    alert ('Установите облегченную версию приложения для iOS по ссылке')
} else if (clientOS = 1 && clientDeviceYear < 2015) {
    alert ('Установите облегченную версию приложения для Android по ссылке')
}