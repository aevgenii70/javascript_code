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
***/
let slovo = '';
slovo = prompt('Напиши в поле слово: друг');
if(slovo == 'друг') {   
    alert('Вы ввели слово друг!');
    console.log('slovo: ', slovo);
} else {
    alert('Вы ввели другое слово!');
    console.log('slovo: ', slovo);
}