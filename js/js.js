let num = 266219;

//Задание 2 вариант 1
let numArray = num.toString().split('').map(Number);
console.log(numArray);
let composition = numArray[0] * numArray[1] * numArray[2] * numArray[3] * numArray[4] * numArray[5];
console.log(composition);
composition = composition ** 3;
console.log(composition);
console.log(String(composition).slice(0, 2));