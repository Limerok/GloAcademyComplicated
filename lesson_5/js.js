'use strict';

//Задание 5.1

let masArr = ['18923', '23903', '42023', '3112321', '5324234', '23412452', '4123123'];

for (let i = 0; i <= masArr.length-1; i++){
  if (masArr[i].charAt(0) === '2' || masArr[i].charAt(0) === '4'){
    console.log(masArr[i]);
  }
}

//Задание 5.2

for (let i = 2; i <= 100; i++) { // Запускаем цикл от 2 до 100
    let flag = 1;
    if (i > 2 && i % 2 !== 0)
    {
        for (let j = 3; j * j <= i; j = j + 2)
        {
            if (i % j === 0)
            {
                flag=0;
                break;
            }
        }
    }
    else if (i !== 2) {
      flag = 0;
    }
    if (flag===1) {console.log(i + ': 1 ' + i);}
}