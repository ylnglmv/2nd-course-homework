// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}

// Задание 2

const numb = [1, 5, 4, 10, 0, 3];
numb.indexOf(4);
console.log(numb);

// Задание 3

const numbers = [1, 3, 5, 10, 20];
numbers.join [' ']
console.log(numbers);

// Задание 4

let arr = [];

for (let i = 0; i <= 1; i++) {
	arr[i] = []; 
	
	for (let j = 0; j <= 1; j++) {
		arr[i].push(j + 1);
	}
}

console.log(arr);


// Задание 5 

const n = [1, 1, 1]
n.push (2, 2, 2.)
console.log(n);

// Задание 6 

let s = [9, 8, 7, 'a', 6, 5]
s.sort()
s.slice ('a')
console.log(s);

// Задание 7

const nu = [9, 8, 7, 6, 5]
let guess = Number((prompt ('Угадайте число')))
if (guess === nu) {
    alert ('Угадал')
} else {
    alert ('Не угадал')
}

// Задание 8

const str = 'abcdef'; 
const result = str.split(''); 
result.reverse()
result.toString ()
console.log(result);

// Задание 9 

const massive1 = [1, 2, 3,];
const massive2 = [4, 5, 6];

const all = [...massive1, ...massive2]; 
console.log(all);

// Задание 10

let g = [3,7,8,4,5,1];

for (let i = 0; i <= g.length; i++) {
	console.log(arr[i]);
}

// Задание 11

function mult {
    const g = [3,7,8,4,5,1]
    let result = g.map(item => (item ** 2))
    console.log(result);
}

// Задание 12

const getLength = source => source.map(str => str.length);
getLength(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]

// Задание 13

function filterPositive(array) {
    const n = [-25, 25, 0, -1000, -2]
    const result = n.filter (item => (-item))
    console.log(result);
  }
  
  filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
  filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]