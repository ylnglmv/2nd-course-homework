// Задание 8 

function gameseasons() {
    
    let monthNumber = prompt ('Введине номер месяца');
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
    

// Задание 11

function gameguess() {
    let list = [['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']];
    list = list.sort(() => Math.random() - 0.5);
    alert(list)
    
    let first = prompt('Чему равнялся первый элемент массива?')
    let last = promt('Чему равнялся последний элемент массива?')
    
    if (first === [0] && last === [7]) {
        alert('Поздравляю, вы выиграли!')
    } else if (first === [0] || last === [7]) { 
        alert('Вы были близки к победе!')
    } else {
        alert('Вы ответ или неверно!')
    }
    }