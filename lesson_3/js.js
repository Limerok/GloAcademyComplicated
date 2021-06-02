'use strict';

//Задание 4 вар_1
let Argument = function (data) {

    if (typeof (data) !== 'string') {
      return alert('Аргумент не строка');
    } else {
      data = data.trim();
      return data.length > 30 ? data.slice(0, 30) + '...' : data;
    }
  
  };
  
  alert( Argument(prompt('Введите что угодно')) );
  alert( Argument(12345678) );
