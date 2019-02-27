`use strict`;
// let a = 10;

// const fn = function (value) {
//   // console.log('loaded');  // проверяем или функция вызвалась
//   const ifValue = Number(value) || a;
//   // console.log('ifValue', ifValue); // проверяем что на выходе в константе ifValue

//   if(!Number.isNaN(ifValue)) {
//     // console.log('firstIF'); // проверяем или выполняется первое условие
//     console.log(ifValue + 10);
//   } else {
//     // console.log('secondIF'); // проверяем или выполняется второе условие
//     console.log('value is NaN');
//   }
// };

// fn();

// const printMessage = function (callback) {
//     const message = callback();
//     console.log( message );
//   };

//   const getMessage = function () {
//     return "Welcome to the jungle!";
//   }

//   printMessage(getMessage); // "Welcome to the jungle!"

// document.querySelector(`.button`).onclick=

/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки
// const checkNumberType = function (num) {
//     const even = num % 2 === 0;

//     // const Odd = num % 2 !== 0;
// return even ?  `even` : `odd`;

// if(even === true) {
//     return `even`;

// }

// else {
//     return `odd`;
// }}

// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'

//==

/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// Вызовы функции для проверки

// let formatString = function (str) {
//     if (str.length < 40) {
//       console.log('str if < 40', str);
//       return str;
//     } else {
//       let newStr = str.slice(0, 40) + '...'
//       console.log('str if > 40', newStr);
//       return newStr;
//     }
//   }

// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка

//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка

//==

/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// function checkForSpam(str) {
//     if (str.toLowerCase().includes(`spam`) || str.toLowerCase().includes(`sale`)) {
//         return true

//     }
//     else {
//         return false
//     }
// }
// еще вариант :
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// function checkForSpam(str) {
//   return (
//     str.toLowerCase().includes(`spam`) || str.toLowerCase().includes(`sale`)
//   );
// }

//==


// const map = (arr, callback) => { // обьявляем функцию с аргументами arr(массивом), callback(функцией)
//     const resultArr = []; // обьявляем пустой массив, в который будет записывать новые эл-ты
    
//     // перебираем, входящий при вызове функции массив, записанный в аргумент arr. 
//     // в теле цикла елементы пропускаем через функцию callback, обьявленную в аргументах
//     // и записываем результат callback-функции в переменную result.
//     // поседним этапом цикла - записываем result в новый массив, выходим из массива.
//     // последним этапом функции map будет возврат(return) переменной resultArr.
//     for(const element of arr) {
//       const result = callback(element);
//       resultArr.push(result);
//     }
//     return resultArr;
//   };
  
//   const double = val => val * 2;
//   const triple = val => val * 3;
//   const numbers = [1, 2, 3, 4, 5];
  
//   const doubledNumbers = map(numbers, double);
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]
  
//   const tripledNumbers = map(numbers, triple);
//   console.log(tripledNumbers); // [3, 6, 9, 12, 15]

//= второй вариант самостоятельный 

// // обьявляем функцию с аргументами arr(массивом), callback(функцией)
//  // обьявляем пустой массив, в который будет записывать новые эл-ты
    
//     // перебираем, входящий при вызове функции массив, записанный в аргумент arr. 
//     // в теле цикла елементы пропускаем через функцию callback, обьявленную в аргументах
//     // и записываем результат callback-функции в переменную result.
//     // поседним этапом цикла - записываем result в новый массив, выходим из массива.
//     // последним этапом функции map будет возврат(return) переменной resultArr.

// const numbers = [1, 2, 3, 4, 5];

// const ourArray =(transfer,numbersClone) => {
//  let newMass = [];
//  for (const numbersCloneElement of numbersClone) {
//    const newElement = transfer(numbersCloneElement);
//    newMass.push(newElement);
//  }
//  return newMass;
// };

// const double = (number) => number *2;

// // const triple = (number) => number *3;
// const triple = function (number) {
//  return number * 3;
// }
// const doubledNumbers = ourArray(double, numbers);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// const tripledNumbers = ourArray(triple,numbers);
// console.log(tripledNumbers); // [3, 6, 9, 12, 15]

//===

// const numbers = [1, 2, 3, 4, 5]; //not our mass

// const ourArray =(transfer,numbersClone) => {//new mass
//   let newMass = []; //future mass
//   for (const numbersCloneElement of numbersClone) { //iteration of new mass
//     const newElement = transfer(numbersCloneElement); // rewrite transfer element
//     newMass.push(newElement); // rewrite new mass
//   }
//   return newMass; // return parametrs in numbersclone
// };

// const double = (number) => number *2; // our function 

// // const triple = (number) => number *3;
// const triple = function (number) {     //our function
//   return number * 3;
// }
// const doubledNumbers = ourArray(double, numbers); // we need results
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// const tripledNumbers = ourArray(triple,numbers);
// console.log(tripledNumbers); // [3, 6, 9, 12, 15]


//=


/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/


function getPx(str) {
    if (typeof str === `string`) {
        return Number.parseFloat(str)
    } else {
        return null
    }
}

// Вызовы функции для проверки
console.log( getPx("10px") === 10 ); // должно быть:  true
console.log( getPx("10.5") === 10.5 ); // должно быть:  true
console.log( getPx("0") === 0 ); // должно быть:  true
console.log( getPx(-1) ); // должно быть:  null
console.log( getPx(10) ); // должно быть:  null
