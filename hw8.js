// Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 people.sort(function() {
  console.log(age);
});


// Задание 2

function isPositive(number) {
    return number > 0
    }

function isMale(g) {
    return g.gender === 'male';
    }
function filter(array, ruleFunction) {
   let result = [];
   for (i = 0; i < array.length; i++) {
    if (ruleFunction(array[i])) {
        result.push(array[i]);
    }
   }
   return result
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale));
    
// Задание 3 

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] +  " " + myDate.getFullYear() +  ", " + days[myDate.getDay()]
 + myDate.getHours() + " " + myDate.getMinutes() + " " + myDate.getSeconds();

 let intervalID = fullDate.setInterval(myCallback, 500);

 function myCallback() {
 let timerId = setTimeout(fullDate, 1000 * 30) => console.log('30 секунд прошло');
clearTimeout(timerId);
}

// Задание 4 

function delayForSecond(callback) {
   setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// Задание 5 

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => (sayHi('Глеб')));
