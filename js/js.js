'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', '<i>Суббота</i>', '<i>Воскресенье</i>'];

// Пример с инета
let todayindex = (6 + new Date().getDay()) % 7;
week[todayindex] = `<b>${ week[todayindex] }</b>`;
  
document.body.insertAdjacentHTML('beforeEnd', week.join('<br>'));

//Пробую сам =)
let week2 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let target = document.querySelector('#pd');
let data = new Date();
let day = data.getDay() - 1;

week2.forEach(function(item, i){
    if (item === 'Суббота'){
        if (i === day){
            target.insertAdjacentHTML('beforeEnd', '<p>' + item.bold().italics() + '</p>');
        } else {
            target.insertAdjacentHTML('beforeEnd', '<p>' + item.italics() + '</p>');
        }
    } else if (item === 'Воскресенье') {
        if (i === day){
            target.insertAdjacentHTML('beforeEnd', '<p>' + item.bold().italics() + '</p>');
        } else {
            target.insertAdjacentHTML('beforeEnd', '<p>' + item.italics() + '</p>');
        }
    } /* else if  {

    } */ else {
        if (i === day){
            target.insertAdjacentHTML('beforeEnd', '<p>' + item.bold() + '</p>');
        } else {
            target.insertAdjacentHTML('beforeEnd', '<p>' + item + '</p>');
        }
    }
});