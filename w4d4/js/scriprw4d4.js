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
// // еще вариант :
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// function checkForSpam(str) {

// return ( str.toLowerCase().includes(`spam`) || str.toLowerCase().includes(`sale`))
// }