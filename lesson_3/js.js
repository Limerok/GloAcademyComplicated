'use strict';

//Задание 4 вар_1
const argument = function (data) {

    if (typeof (data) !== 'string') {
      return alert('Аргумент не строка');
    } else {
      data = data.trim();
      return data.length > 30 ? data.slice(0, 30) + '...' : data;
    }
  
  };
  
  alert( argument(prompt('Введите что угодно')) );
  alert( argument(12345678) );
