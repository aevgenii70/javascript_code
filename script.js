/*** 
let age = 5;
let num = prompt('Угадай возраст от 1 до 10');
if ( num > 5 ) {
    alert('Число больше!');
    console.log('num: ' + num);
    } else if ( num < 5 ) {
        alert('Число число меньше');
        console.log('num: ' + num);
    
     } else if (num > 5 ) {
        alert('Число больше!');
        console.log('num: ' + num);
    }

    else {
        alert('Вы угадали число!');
        console.log('num: ' + num);
    }

let slovo = '';
slovo = prompt('Напиши в поле слово: друг');
if(slovo == 'друг') {   
    alert('Вы ввели слово друг!');
    console.log('slovo: ', slovo);
} else {
    alert('Вы ввели другое слово!');
    console.log('slovo: ', slovo);
}
    */////
// alert("города");
/*** 
let cities = ['Москва','СПБ','Омск','Иркутск','Вологда','Новосибирск','Ульяновск','Сочи','Краснодар']
console.log('cities: ', cities);
cities[0] = 'Новая Москва'; 
console.log('cities: ', cities);
cities.push('Астрахань'); // push добавляет элемент в конец.
console.log('cities: ', cities);
cities.shift(); //shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.
console.log('cities: ', cities);
// cities.push('Курск');
cities.pop();
console.log('cities: ', cities);
cities.unshift('Москва'); // Добавляет элемент в начало массива:
console.log('cities: ', cities);

***/
/***
let num = 10;
while (num > 0) {
    console.log('num: ', num);
    num--;
}

for (let i = 0; i < arr.length; i++) {
    console.log('i: ', i);
}

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {

    console.log('i: ', arr[i]*arr[i]);
}
**/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/** 
for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) 

    console.log('Четное ', arr[i]);
   
else 
    console.log('Не четное ', arr[i]);
    
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr1 = [];
let arr2 = [];
let i = 0;
while(i < arr.length) {
    if (arr[i] % 2 == 0) 
        arr1.unshift(arr[i]);
        console.log('Четное ', arr[i]);
       
    else 
        arr2.unshift(arr[i]);
        console.log('Не четное ', arr[i]);
i++;
} 

let arr = [];
for (i = 0; i <= 51; i++) {

    if (i % 2 == 0) {
        arr.unshift(i);      
    }   
    if (i == 51 ) {
        arr.pop();
        console.log(arr); 
    }     

}


let car = {
    name: "BMW",
    doors: 5,
    wheels: 4,
    power: 120,
    conditioner: false,
    'colorBoard': ['black','yellow','blue','pink','white'],
    style: {
        speed: 0,
        direction: 'north'
    },
    speedOne: function(sum) {
        console.log('Функция работает', sum);
    },
    speedTwo: function() {
    
    },
}
console.log("Двери было ", car.doors);
car.doors = 4;
console.log("Двери ", car.doors);
car.speedOne(100);

let man = new Object();

man.name = 'Иван';
console.log(man.name);

***/

let programmer = new Object();

programmer.name = 'Иван';
programmer.lastname = 'Петров'; 

let human = {
    
    age: 33,
    name: 'Иван',
    lastname: 'Петров',
    job: 'Программист',
    sayHello: function() {
        console.log('Привет,', this.name);
    },
    skills: ['Java','C++','Python','PHP', 'Golang'],
    hobby: ['походы','кино','чтение','комп.игры','плавание','путешествия'],
}
/***
 * 

human.sayHello();
delete human.lastname;
console.log(human.name);
console.log(human);
human.name = 'Митрофан';
human.sayHello();
console.log(human.name);
human.lastname = 'Кошкин';
console.log(human);

for (let i of human.skills) {
    console.log(i);
}


for (let i in human) {
    console.log(human[i]);
}

 * 
 */
console.log('бЫЛ ',human.lastname);
for (let i in human) {
    if (human[i] == 'Петров') human.lastname = 'Иванов';
}
console.log(human.lastname);

const numbers = [1, 2, 3, 4]

numbers.forEach((num) => {
  const square = num * num
  console.log('Квадрат числа равен: ' + square)
})

const myArray = [4, 2, 8, 7, 3, 1, 0];
const myArray2 = myArray.map(item => item * 2).sort((a, b) => a - b);

console.log(myArray); // [4, 2, 8, 7, 3, 1, 0]
console.log(myArray2); // [0, 2, 4, 6, 8, 14, 16]