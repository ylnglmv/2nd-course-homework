// Задание 1 

const number = (a, b) => {
if (a <= b) {
    return a
} if else (b <= a) {
    return b
}
}

// Задание 2
const number1 = (num) => {
    if (num % 2 == 0) {
        let message = ('Число чётное')
        return message
    } else {
        let message2 = ('Число нечётное')
        return message2
    }
}

// Задание 3

let n = (Number) => {
    console.log(Number ** 2);
}

let n = (Number) => {
    let mult = Number ** 2
    return mult;
}

// Задание 4 

let age = (prompt('Сколько вам лет?')) => {
    if (age < 0) {
        alert ('Вы ввели неправильное значение')
    } else if (12 <= age >= 0) {
        alert ('Привет, друг!')
     } else {
        alert ('Добро пожаловать!') 
     }
    }

// Задание 5

let numbers = (a, b) => {
    if (!isNaN(a,b)) {
        let mult = a * b
        return mult
    } else {
        alert ('Одно или оба значения не являются числом')
    }
}
// Задание 6 

let number = (prompt('введите число')) => {
    if (!isNaN(number)) {
       let result= number ** 3
        alert ('${number} в кубе равняется ${result}')
    } else {
        alert ('Переданный параметр не является числом')
    }
}

// Задание 7 

function getCircleArea {
    return 3,14 * this ** 2;
}
function getCirclePerimeter {
    return 2 * 3,14 * this
}

const circle1 = {
    radius: 2,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 3,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

// Задание 8 
Сделайте функцию, которая принимает параметром номер месяца (от 1 до 12) и возвращает время года, в которое попадает этот месяц ("Зима", "Лето", "Весна", "Осень").
Придумайте, как должна работать функция, если ей передать неправильный параметр.
Выведите пример использования функции в консоль.
Для решения задачи используйте конструкцию 
else if
 и логические операторы 
||
 (логическое ИЛИ) и 
&&
 (логическое И).


