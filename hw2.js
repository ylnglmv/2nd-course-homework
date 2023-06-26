// Задание 1
let a = 10;
alert (a);
a = 20;
alert (a);

// Задание 2 
let year = 2007;
alert (year);

// Задание 3 
let name = 'Brendon';
alert (name);

// Задание 4
let number1 = 10;
let number2 = 2;
alert (number1 + number2);
alert (number1 - number2);
alert (number1 * number2);
alert (number1 / number2);

// Задание 5 
let result = 2 ** 5;
alert (result);

// Задание 6
let a = 9;
let b = 2
alert (a % b);

// Задание 7 
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 8
let age = prompt ("Сколько вам лет?");
alert (age);

// Задание 9.0
const user = {
    name: 'Bob';
    age: 30;
    isAdmin: true;
}

// Задание 9.1
let user.cityofresidence = 'Barcelona';

// Задание 9.2
let age = 35;

// Задание 9.3
delete user.cityofresidence;

// Задание 9.4
let info = prompt ('Какую информацию хотите узнать у пользователя?');
console.log (user[info]);
alert (user);

// Задание 10
let name = prompt ('Ваше имя');
alert (Привет, ${name});