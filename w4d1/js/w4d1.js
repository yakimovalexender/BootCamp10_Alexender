'use strict'
//eroihgeorihg


// var year = 2018;
// let month = "Nowember"
// const date = 27;
// let number = 10;
// // let Number = 50;
// let numBer = 100;

// let peoplename = 'Bob';
// let peopleName = 'Bob';

// let summ = number * Number + numBer;
// console.log('summ', summ);
// alert('summ', summ);
// const answer1 = confirm(`Are you ready? ${month}`);
// const answer2 = confirm('How are you?');
// prompt('How are you?');


// console.log('answer1', answer1);
// console.log('answer2', answer2);

// console.log(typeof number);
// console.log(typeof month);
// console.log(typeof month === typeof number);

// console.log(month.length);
// console.log(month.indexOf('N'));
// console.log(month.indexOf('w'));

// console.log(month.includes('Now'));
// console.log(month.includes('now'));

// const fontSize = `5.5px`;
// const usersLength = 20 ; 

// console.log(`преобразование в целое число`, Number.parseInt(fontSize) ); // 5
// console.log(`преобразование в число с дробью`, Number.parseFloat(fontSize) ); // 5

// console.log(`проверка на число `, Number.isNaN(Number(fontSize) ) ); // Глобальное свойство NaN является значением, представляющим не-число (Not-A-Number).
// console.log(`проверка на число `, Number.isNaN(usersLength) );

// const a = 0.3;
// const b = 0.5;

// console.log('a+b', a + b);
// console.log('a+b', (a + b).toFixed(10));


// const text = `Преобразование в целое число`;

// console.log(`преобразование к нижнему регистру`, text.toLowerCase());
// console.log(`преобразование к верхнему регистру`, text.toLocaleUpperCase());


// const name =`John`;
// const surname = `Connor`;
// const years= 40;
// const height = 180;

// console.log ('Message:', 
// `Hello ${name} ${surname}. I'm ${years} and ${height + 2 + 'sm'}`);

// console.log('Message:' ,'Hello ' + name+ ' ' + surname + " I'm " + years + ' and ' + (height+2)+'sm.');


// const num = 20;
// const result = num  < 30 && num > 10;
// console.log(result); // true

// const text = 'iug111u';
// const num = 20;
// const result = text.length  < 30 && text.length > 5;
// console.log(result); // true

// const num = 20;
// const result = num < 30 || num > 10;
// console.log(result); // true


// const obj = {

//     id: "asbsd",
//     name: "Alex",
//     role: "admin",
// };

// const rezultobj = obj.role === "admin" || obj["role"] === "moderator";

// console.log(rezultobj); // true

// if(rezultobj) {
//     const name = "Bob";
// }

// console.log(name);
// console.log(surname);



// const surname= " Deizel" ; 


//===========

// var varRezult = "Bob"
// console.log(varRezult);

// if(rezultobj) {
//     var varName = "Bob"
// }

// console.log ("name", name);

// console.log ("varName", varName);





// Логическое "НЕ"

// ! — возвращает false если операнд приводится к true, и true, если операнд приводится к false. То есть приводит операнд к булю, а затем заменяет его на противоположный.
// var varRezult = "Bob"
// console.log(!varRezult);

// if(rezultobj) {
//     var varName = "Bob"
// }

// console.log ("name", name);

// console.log ("varName", varName);




// // интерактив
// const rezultPromt   = prompt("Введите значение");

// if (rezultPromt !== "admin") {
// alert ("нет прав");
// }else { 
//     alert ("добро пожаловать");
// }

// //====




// const obj = {
//     id: 'asdasd',
//     name: 'Alex',
//     role: 'admin',
//     age: 30,
//    };
//    const resultObj = obj.role === 'admin' || obj['role'] === 'moderator';

//    console.log(resultObj);

//    if(resultObj) {
//     const name = 'Bob';
//    }

//    if(resultObj !== true) {
//     var varName = 'Bob';
//    }

//    const resultPrompt = prompt('Введите значение');

//    if (resultPrompt !== 'admin' && obj.age) {
//     alert('нет прав');
//    } else {
//     alert('добро пожалывать');
//    };

//    console.log('name', name);
//    // console.log(surname);
//    console.log('varName', varName);

// const surname = 'Dilslsl';


//=====


// let season;
// const monthName = "January";

// if (monthName === "June") {
//     season = "summer";
// } else if (monthName === "May") {
//     season = "spring";
// } else if (monthName === "September") {
//     season = "autumn";
// } else {
//     season = "winter";
// }


//====

// let season;
// const monthName = "January";

// if (monthName === "June" || monthName === "July" || monthName === "August") {
//  season = "summer";
// } else if (monthName === "May") {
//  season = "spring";
// } else if (monthName === "September") {
//  season = "autumn";
// } else {
//  season = "winter";
// }

//===


// let hours = 7;
// let minutes = 3;
// let seconds = 43;
// if (hours <= 10) {
//   hours = '0' + hours;
// }else{

// }
// if (minutes <= 10) {
//   minutes = '0' + minutes;
// }else{

// }
// if (seconds <= 10) {
//   seconds = '0' + seconds;
// }else{

// }

// const time = `${hours}:${minutes}:${seconds}`;

// console.log('Time is: ', time);

//===

// const monthName = "January";
// let result;

// if (monthName === "June") {
//   let result = "summer";
// } else {
//   let result = "winter";
// }

// // Конструкция выше записанная тернарным оператором
// const season = monthName === "June" ? "summer" : "winter";

//====


//Тернарный оператор

// Записывать конструкцию if else достаточно трудоёмко. В JS существует схожая конструкция с упрощенным синтаксисом называемая тернарный (ternary eng. - тройной) оператор.

// Для выделения условия, блока if и блока else в тернарном операторе используют символы ? и :, а символ ; как и всегда, объявляет об окончании инструкции.


// const monthName = "January";

// const season = monthName === "June"
//   ? "summer" : monthName === "May"
//   ? "spring" : monthName === "September"
//   ? "autumn" : "winter";

// season; // "winter"


//== 


// const monthName = "January";
// let result;

// if (monthName === "June") {
//   let result = "summer";
// } else {
//   let result = "winter";
// }

// // Конструкция выше записанная тернарным оператором
// const season = monthName === "June" ? "summer" : "winter";

//===

//Оператор switch
//В некоторых случаях сложность чтения логических конструкций можно избежать, используя оператор ветвления switch. Синтаксис этого оператора разбивает условие на общую часть switch и множество отдельных частей case. Т.е. применимость этого оператора ограничена только задачами с одним общим вопросом и множеством вариантов ответов.

// Блок выполнения следует сразу за : и заканчивается как обычно ;. Оператор break в завершении каждого блока case ставят чтобы прервать дальнейшие проверки и сразу перейти к коду за оператором switch.

// const monthName = "January";
// let season;

// switch (monthName) {
//     case "June":
//         season = "summer";
//         break;
//     case "May":
//         season = "spring";
//         break;
//     case "September":
//         season = "autumn";
//         break;
//     default:
//         season = "winter";
// }

// console.log(season); //winter

//===

// const monthName = "May";
// let season;

// switch (monthName) {
//   case "June":
//     season += "Summer";
//   case "May":
//     season += "Spring";
//   case "September":
//     season += "Autumn";
//   default:
//     season += "Winter";
// }

// console.log(season); // "undefinedSpringAutumnWinter"

//===

// let value = 0;

// value +=50;
// value +=50;
// value -=30;

// console.log("value",value);


//дополнительные задания
// //  - Объявите две переменные: guest и name
//   - В переменную name запишите строку 'Mango'
//   - Скопируйте значение из name в guest
//   - Выведите в консоли значение переменной guest (должно вывести 'Mango')

// let guest; 
// let name;
// name = "Mango";
// guest = name;
// console.log(guest);
 


/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
  
  Найдите ошибку в записи значания для переменной date, 
  результат будет выведен в консоль и равен комментарию 
  напротив console.log()
*/

// const day = 2;
// const month = 10;
// const year = 2017;

// const date ="0" + day + "\\" + month + "\\" + year;

// console.log(date); // 02\10\2017

//=====


/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/

// const name = prompt("Введите имя");
// alert (name);

//====

/*
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/

// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = `${name} прибывает на отдых ${date} в ${roomType}`;
// // '{{Mango}} прибывает на отдых [date] в #<roomType>.`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.

//====

/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth;
totalWidth = Number.parseInt(padding) + Number.parseInt(border) + Number.parseInt(contentWidth) + "px";
console.log(totalWidth); // '125px'

//===