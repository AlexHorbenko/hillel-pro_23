// Завдання: Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const array = [];

for (let i = 0; i < 10; i++) {
    let number = [];
    for (let j = 0; j < 10; j++) {
        let num = Math.round(Math.random() * (100 - 1) + 1);
        number.push(num);
    }
    array.push(number);
}
// console.log(array);

const table = document.querySelector('.table');
array.forEach((arr) => {
    let row = document.createElement('tr');
    arr.forEach((num) => {
        let cell = document.createElement('td');
        cell.classList.add('cell');
        cell.innerText = num;
        row.appendChild(cell);
    })
    table.append(row);
});

