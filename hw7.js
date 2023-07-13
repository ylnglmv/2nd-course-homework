// Задание 1 

const answer = ('Без рук, а рисует. Без зубов, а кусает'); 
answer.toUpperCase() 
console.log(answer);

// Задание 2 

function searchStart (str) {
    return str.indexOf();
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

// Задание 3 

Math.round(32.58884)

Math.floor(32.58884)

Math.ceil(32.58884)

// Задание 4 

Math.max(52, 53, 49, 77, 21, 32);
Math.min(52, 53, 49, 77, 21, 32);

// Задание 5 

function getRandomArbitrary(1, 10) {
    return Math.random() * (10 - 1) + 1;
  }
  console.log(getRandomArbitrary);
  
// Задание 6 

function getRandomArrNumbers(numb) {
    let array = [];
    let halfArray = Math.floor(numb / 2);
    for (let i = 0; i < halfArray; i++) {
        array.push(Math.ceil(Math.random(num) * num));
    }
    return array
}

getRandomArrNumbers(7); 
getRandomArrNumbers(12); 

// Задание 7 

function getRandomArbitrary(5, 35) {
    return Math.random() * (35 - 5) + 5;
  }

// Задание 8

let nowDate = new Date();
console.log(nowDate);

// Задание 9

let currentDate = new Date();
setDate(getDate(73))

// Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
myDate.setHours();
let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] +  " " + myDate.getFullYear() +  ", " + days[myDate.getDay()];
console.log(fullDate);

// Задание 11

function gameguess () {
let list = [['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']];
list = list.sort(() => Math.random() - 0.5);
alert(list)

let first = prompt('Чему равнялся первый элемент массива?')
let last = promt('Чему равнялся последний элемент массива?')

if (first === [0] && last === [7]) {
    alert('Поздравляю, вы выиграли!')
} if else (first === [0] || last === [7]) { 
    alert('Вы были близки к победе!')
} else {
    alert('Вы ответ или неверно!')
}
}
