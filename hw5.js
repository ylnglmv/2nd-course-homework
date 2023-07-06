// Задание 1 

const number = (a, b) => {
if (a <= b) {
    return a
} else {
    return b
}
}
number(a, b)

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
number1(num)

// Задание 3

let n = (Number) => {
    console.log(Number ** 2);
}

let n = (Number) => {
    let mult = Number ** 2
    return mult;
}
n(Number)

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
    age()

// Задание 5

let numbers = (a, b) => {
    if (!isNaN(a,b)) {
        let mult = a * b
        return mult
    } else {
        alert ('Одно или оба значения не являются числом')
    }
}
numbers(a,b)
// Задание 6 

let number = (prompt('введите число')) => {
    if (!isNaN(number)) {
       let result= number ** 3
        alert ('${number} в кубе равняется ${result}')
    } else {
        alert ('Переданный параметр не является числом')
    }
}
number()

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
getCircleArea()
getCirclePerimeter()

// Задание 8 

function gameseasons () {
    
let monthNumber = prompt ('Введите номер месяца');
monthNumber = Number (monthNumber);

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
}
gameseasons()
