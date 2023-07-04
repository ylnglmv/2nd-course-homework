// Задание 1

let i = 1;

while (i >= 2) {
    alert ('привет');
    i++;
}


// Задание 2

for (let i = 1; i < 6; i++ ) {
    console.log(i);
}

// Задание 3 

for (let i = 7; i < 23; i++) {
    console.log(i);
}

// Задание 4 

const obj = {
    'Коля':'200'
    'Вася':'300'
    'Петя':'400'
};
for (name in obj) {
    console.log('${name} - зарплата ${obj} долларов.');
}

// Задание 5 

let n = 1000

do { 
    let m = n/2 
} while (m > 50);

let num = 5

// Задание 6 

for (let friday = 1; friday <= 31; friday++) {
    if (friday % 5 == 0) {
        console.log("Сегодня пятница, ${friday} -е число. Необходимо подготовить отчет.");
    }  
}