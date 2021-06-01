'use strict';

let num = 266219;

//Задание 2 вариант 1
let numArray = num.toString().split('').map(Number);
console.log(numArray);
let composition = numArray[0] * numArray[1] * numArray[2] * numArray[3] * numArray[4] * numArray[5];
console.log(composition);
composition = composition ** 3;
console.log(composition);
console.log(String(composition).slice(0, 2));

//Задание 2 вариант 2
const square = function sumDigits(num) {
    let str = num.toString();
    let sum = 1;
  
    for (let i = 0; i < str.length; i++) {
      sum *= parseInt(str.charAt(i), 10);
    }
  
    console.log(sum);
    let composition2 = sum ** 3;
    console.log(composition2);
    console.log(String(composition2).slice(0, 2));
  };

square(num);

//Задание 2 вариант 3
let numArray2 = num.toString().split('').reduce((a, b)=>a * b);
console.log(numArray2);
numArray2 = numArray2 ** 3;
console.log(numArray2);
console.log(String(numArray2).slice(0, 2));

//ЗАДАНИЕ 3
let lang = prompt('Введите значение "ru" или "en"');
let langLower = lang.toLowerCase();

//Задание 3 через if
if (langLower === 'ru') {
  alert('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (langLower === 'en') {
  alert('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
  alert('Введено неправильное значение');
}

//Задание 3 через switch-case
switch (langLower){
  case 'ru':
    alert('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
  case 'en':
    alert('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
}

//Задание 3 через массив
let langArray = [];
langArray.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
langArray.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

alert(langArray[langLower]);

//Задание 3 тернарный оператор
let namePerson = prompt('Введите Имя пользователя');
let namePersonLower = namePerson.toLowerCase();

alert( (namePersonLower === 'артем') ? 'Директор':
(namePersonLower === 'максим') ? 'Преподаватель':
'Студент');