/*** 
Задание
Вам необходимо самостоятельно решить, для какого задания
какой цикл лучше использовать: WHILE, DO WHILE или FOR.

1. Подсчитать сумму всех чисел в заданном пользователем
диапазоне.
**/

let start = Number(prompt('Введите начало диапазона'));
let end = Number(prompt('Введите конец диапазона'));

let sum = 0;

// Выбираем цикл с условием
if (start < end && end != start) {

    while (start <= end) {
        sum += start;
        start++;
    }
    console.log('Сумма всего диапазона: ' + sum);
}

/**
 * 2. Запросить 2 числа и найти только наибольший общий делитель.
 */

let x = Number(prompt('Введите первое число '));
let y = Number(prompt('Введите воторое число '));

// находим наибольший общий делитель

function NOD (x, y) {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}
console.log(NOD(10, 25));