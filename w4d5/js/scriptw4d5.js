`use strict`;
/*  
//   Создайте фукнцию findLongestWord(str),
//   которая получает аргументом произвольную строку и
//   возвращает самое длинное слово в этой строке.   
  
//   Важное условие - в строке могут быть только пробелы,
//   символы букв и цифр!
// */

// // Вызовы функции для проверки
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'

// console.log(findLongestWord("Google do a roll")); // вернет 'Google'

// console.log(findLongestWord("May the force be with you")); // вернет 'force'

// function findLongestWord(str) {
//   let string = str.split(" ");
//   let longestWord = 0;
//   let word = null;

//   for (let i = 0; i < string.length - 1; i++) {
//     if (string[i].length > longestWord) {
//       longestWord = string[i].length;
//       word = string[i];
//     }
//   }
//   return word;
// }

// //   var strSplit = “The quick brown fox jumped over the lazy dog”.split(‘ ‘);


/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// Вызовы функции для проверки
// console.log(
//   findLargestNumber([1, 2, 3])
// ); // вернет 3

// console.log(
//   findLargestNumber([27, 12, 18, 5])
// ); // вернет 27

// console.log(
//   findLargestNumber([31, 128, 14, 74])
// ); // вернет 128


// function findLargestNumber (num) {
//   let numLen = num.length;
//   maxEl = num[0];
// for (let i=0 ; i < numLen; i++) {
//   if (maxEl < num [i]) {
//     maxEl = num[i];
//   }
// }
// return maxEl;
// }

//===

'use strict';


//loops

// while

// 1) лічильник
// 2) Умова виконання циклу
// 3) Тіло циклу
// 4) Лічильник має змінюватися

// let counter = 0;
//
// let arr = [];
// while(counter < 5) {
//   let a = prompt('Enter number');
//   arr.push(a);
//   counter++;
//     // counter +=1;
//     // counter = counter + 1;
// }

// let counter = 10;
// let arr = [];
//
// do {
//   let a = prompt('Enter number');
//   arr.push(a);
//   counter++;
// } while (counter < 5)

// console.log(arr);
// let arr = [];
// for(let i = 0; i < 5; i++) {
//     let a = prompt('Enter n');
//     arr.push(+a);
// }
// console.log(arr);

// let number = 0;
// let arr = [];
// // // // поки номер меньше 3 виводь в консоль цей номер і потім збільшуй на 1
// // console.log(number < 3);
// while (number < 4) {
//     let userNumber = prompt('Enter number');
//     if(userNumber !== null && userNumber !== '') {
//       if (Number(userNumber) === 9) {
//         alert('9 це погане число');
//         number+=1;
//         continue;
//       } else {
//         arr.push(Number(userNumber));
//         number+=1;
//       }
//     }  else {
//       break;
//     }
// }
// console.log(userNumber);
// console.log(arr);

// // do while

// let number = 10;
// do {
//   console.log(number);
//   number++;
// }
// while (number < 5);

// while (number < 5) {
//   console.log(number);
//   number++;
// }
// console.log(condition);

//
// for
// особливість let i var
// let arr = [];
// for(let i = 0; i < 10; i+=1) {
//   let number = prompt('Enter number');
//   arr.push(number);
// }
// console.log(arr);

// let arr = [5, 10, 25, 68, 78, 95];
// let total = 0;
// // for(let i = 0; i <arr.length; i++) { // імперативний код
// //     total += arr[i];
// // }

// for (let el of arr) { // декларативний код
//     total += el;
// }
// console.log(total);

// let arrTenPrc = [];
// // for(let i = 0, max = arr.length; i < max; i+=1) {
// //   arrTenPrc.push(Number((arr[i]*1.1).toFixed(2)));
// // }
// // console.log(arrTenPrc);

// for(let element of arr) {
//   arrTenPrc.push(Number((element*1.1).toFixed(2)))
// }

// 1) спитатися в користувача скільки товарі він хоче купити в магазині
// 2) На основаі пункта 1 стільки разів має спрацювати цикл
// 3) Цикл має пропонувати користуівачу ввести назву покупки
// 4) Ці назви зберігати в масиві
// 5) Вивести масив з покупками по закінченю цикла в консоль.

// let number = prompt('Enter number');
// let arr = [];
// for (let i = 0; i < number; i++) {
//     let answer = prompt('Enter goods');
//     arr.push(answer);
// }
// console.log(arr);

// let arr = [];
// for(let i =0; i < Infinity; i++) {
//     let number = prompt('Enter number');
//     if(Number(number) === 9) {
//         break;
//     }
//     arr.push(number);
// }

// console.log(arr);

// let arr = [5,10,15,20,25,30,35,40,48,51];
//
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !==0) { // пропустит итерацию(повторение) если arr[i] будет не четным
//         continue;
//     }
//     console.log(arr[i]);
// }

//

// let empty = [];
// let teamNumber = +prompt('Введите количество команд');
// let teamAmount = +prompt('Какое количество играков?');

// сделаем цикл, который будет присваивать порядковый номер
// let i = 0;
// let first = [];
// for(let a = 1;a <= teamAmount;a++) {
//   first.push(a);
// }
// console.log(first);
// for(let i = 0; i < teamNumber;i++){
//     let first = [];
//     for(let a = 1;a <= teamAmount;a++) {
//        first.push(a+i*teamAmount);
//     }
//     console.log(first);
//     empty.push(first);
// }
// console.log(empty);
// console.log(empty[1][1][0]);


// const user = {
//   name:  `Alex`,
//   age: 21,
//   male: true,
//   getInfo: function () {
//     return `name: ${this.name} age: ${this.age} male: ${this.male}`
//   },
//   };


// console.log(user.name);
// console.log(user["age"]);
// console.log(["male"]);

// user.age = 26;
// user.heigth = 180;

// console.log(`user`, user);
// console.log(user.getInfo());

// delete user.age
// console.log(`user`, user);
// console.log(user.getInfo());

// for(const key in user) {
//   console.log(`key: ${user[key]}`)
// }


// const casino = {
//   1: [1,5,20],
//   2: [50,100],
// };

// const userArr = Object.entries(user);
// console.log(userArr);

// for(const el of userArr) {
//   console.log((`${el[0]} :  ${el[1]}`));

// }


// const first = {name: `tony`};
// const last = {lastName: `Stark`};


// const person = Object.assign({}, first, last);
// console.log(person);



// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};

// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}

// То же самое используя оператор spread ...

// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};

// const c = { ...a, ...b };

// console.log(c); // {x: 0, y: 2, z: 3}

// const arr1 = [1,2,3];
// const arr1 = [4,5,6];

// const newArr = [ ...arr1, ...arr2];

// console.log(newArr);



//==

// const hotel = {
//   name : "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// // Объявим переменные и присвоим им значения из объекта
// // const name = hotel.name;
// const { name, stars, status } = hotel;

// console.log(name, stars, status); // "Resort Hotel", 5, undefined

// let a=5;
// console.log(a);'


// const a = 'Vasya';
// const b = 'Peyta';

// console.log(`${a} friend ${b}`);


//== понятие typeOF оказывает какой тип переменной

// const test = typeof '5'


// console.log(test);


//==

// alert(`Hi!`);

//==

// const slowCode= prompt(`enter your code`);

// console.log(slowCode);

//==

// const answer = confirm (`Поехали по бабам!?`)

// console.log(typeof answer);


// const x = 5;
// const y = 25;
//  let result;

//  result = x + y;
//  console.log(result);


// const age = Number(prompt(`get age`, ``));
// console.log(age);
// console.log( Number.isNaN(age));

// console.log(typeof age ==="number");

// const message = `привет привет пока пока xaxaxa` ;
// console.log(message.length);

// const message = `HELLO Welcome`;
// const inLOwerCase = message.toLowerCase();
// console.log(inLOwerCase);
// console.log(message);
// console.log(`Kalli beatiful system`.
// toUpperCase());
// console.log(message.includes(`wel`));
// console.log(message.indexOf(`Wel`));



// Представьте следующий код
// const name = 'Mango';
// const age = 2;
// const mood = 'happy';
// А теперь нам надо из этих переменных составить
// результирующую строку в которую надо подставить их значения

// const message = 'My name is ' + name + ", I'm " + age + ' years old and very ' + mood + '.';

// console.log(message); // My name is Mango, I'm 2 years old and very happy.

// Ну как? Понравилось ставить море плюсов для конкатенации строк?
// Особенно хороша точка в конце.
// Представьте ситуацию когда у вас 10 переменных, значения которых
// необходимо подставить в строку. Понимаю, желание бросить JavaScript
// сейчас дошло до пика.

// На помощь приходят шаблонные строки и интерполяция
// const sameMessage = `My name is ${name}, I'm ${age} years old and very ${mood}.`;

// console.log(sameMessage); // My name is Mango, I'm 2 years old and very happy.

// Ну как? Удобно? :)

// // Можно также использовать выражения
// console.log(`Результат сложения равен ${2 + 2}.`); // Результат сложения равен 4.

// const car = `Toyta`;
// const years = `2005`;
// const driver = `Alex`;

// const sameMessage1 = `My ${car} old ${years} driver name my ${car} mister ${driver}  ` 

// console.log(sameMessage1);
// Результат работы confirm и promp,
// мы можем записать в переменную.
// В дальнейшем мы научимся проверять
// введенные данные, выбраную опцию и т.д.

// Мы можем попросить клиента подтвертить бронь на отель
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// Тут мы можем спросить имя отеля
// в котором хотел бы остановится клиент
// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName);

// Важной особенностью prompt есть то, что не зависимо
// что ввел пользователь, всегда вернется строка.
// Тоесть если пользоваль ввел 5, то вернется не число 5,
// а строка "5".
// Об этом всегда необходимо помнить.

// const number = prompt('Please enter a number!');
// console.log( typeof number ); // 'string'
// console.log(number); // '5'

// let isActive = false;
// alert( isActive ); // "false"

// const monthName = "January";
// let result;

// if (monthName === "June") {
//   let result = "summer";
// } else {
//   let result = "winter";
// }

// // Конструкция выше записанная тернарным оператором
// const season = monthName === "June" ? "summer" : "winter";

// const bool = Boolean(``);
// console.log(bool);
//  const num = Number(prompt('enter a number!'));
//  const isValidNumber = Number.isNaN(num);
//  console.log(isValidNumber);

const size_small = 0;
const size_medium = 1;
const size_large = 2;

const price_small = 50;
const price_medium = 100;
const price_large = 200;

const userInput = prompt('0 - small, 1 - medium, 2 - large', 1);
const coffeeSize = Number(userInput);

const isValidInput = userInput !== null && !Number.isNaN(coffeeSize);

if (isValidInput) {

  // let haveCoffe;
  // let coffeeSize;
  // let coffeePrice;

  switch (coffeeSize) {

    case size_small:
      console.log('маленький кофе');
      // haveCoffe = true;
      // coffeeSize = size_small;
      // coffeePrice = price_small;
      const userCash0 = prompt(`давай бабло! С тебя ${price_small}`);
      // console.log(coffePrice);
      break;     
      

    case size_medium:
      console.log('средний кофе');
      // haveCoffe = true;
      // coffeeSize = size_medium;
      // coffeePrice = price_medium;
      const userCash1 = prompt(`давай бабло! С тебя ${price_medium}`);
      break;

    case size_large:
      console.log('большой кофе');
      // haveCoffe = true;
      // coffeeSize = size_large;
      // coffeePrice = price_large;
      const userCash2 = prompt(`давай бабло! С тебя ${price_large}`);
      break;

    default:
      alert('нет такого кофе');

  }
} else {
  alert('что то не так ввели!!!');

}