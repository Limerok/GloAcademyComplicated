'use strict';

let data = new Date();
let year = data.getFullYear();
let month = data.getMonth();
let month2 = data.getMonth();
let monthDay = data.getDate();
let day = data.getDay();
let  hours = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds();


let target = document.querySelector('body');
// Преобразуем месяца
switch (month)
{
  case 0: month='января'; break;
  case 1: month='февраля'; break;
  case 2: month='марта'; break;
  case 3: month='апреля'; break;
  case 4: month='мае'; break;
  case 5: month='июня'; break;
  case 6: month='июля'; break;
  case 7: month='августа'; break;
  case 8: month='сентября'; break;
  case 9: month='октября'; break;
  case 10: month='ноября'; break;
  case 11: month='декабря'; break;
}
let days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
  console.log(typeof hours);
function hoursAuto(hours) {
    if (hours === 1){
        return 'час';
    } else if (hours === 21) {
        return 'час';
    }else if (hours < 5) {
        return 'часа';
    } else if (hours < 21) {
        return 'часов';
    }
    else if (hours <= 24){
        return 'часа';
    }
}
// Вывод 1
target.insertAdjacentHTML('beforeEnd','Сегодня ' + days[day] + ', ' + monthDay + ' ' + month + ' ' + year + ' года,' +
 ' ' + hours + ' ' + hoursAuto(hours) + ' ' + minutes + ' минут ' + seconds + ' секунд');

// Вывод 2
function get0(monthDay, month2, year) {
    if (monthDay < 10) {
        monthDay = '0' + monthDay;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }

    return monthDay + '.' + month2 + '.' + year;
}
setInterval(function(){
    let date = new Date(),
    currentTime = date.toTimeString().replace(/ .*/, ''); 
        document.getElementById('date').innerHTML ='<br>' + get0(monthDay, month2, year) + ' - ' + currentTime;
    },1000);
