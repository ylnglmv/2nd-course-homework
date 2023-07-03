// Задание 1 
let password = 'пароль';
let input = prompt('Введите пароль');
password = input
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
let a = Number
let b = Number
alert(a + b);

// Задание 5 

let monthNumber = prompt ('Введине номер месяца')
monthNumber = Number

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
if (number = Number) {
    console.log(number);
} else if {
    console.log(NaN);
}else if (number / 2 = % = 0) {
    console.log('число чётное');
} else {
    alert (' число нечетное');
}

// Задание 8 и 9 
let clientOS = 0 || 1
let clientOS = prompt (Какая у вас операционная система? Если iOS, то введите цифру 0, есди Android, то цифру 1.)
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