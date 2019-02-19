`use strict`;
/*
const clients = ["Mango", "Poly", "Ajax"];

console.log( clients[0] ); //Mango
console.log( clients[1] ); //POly
console.log( clients[2] ); //Ajax

clients[3] = 'Alex';
console.log(clients[3] ) ; //Alex
clients.length=2;
console.log(clients.length); //2
console.log(clients); 
*/

// split
// const clients = ["Mango", "Poly", "Ajax"];
// const message = "Welcome to Bahamas!"
// //Разбивает строку по разделителю в данном случае это пробел 
// console.log(message.split(" ")); // [Welcome to Bahamas!]

// const message = "Welcome to Bahamas!"
// //Разбивает строку по разделителю в данном случае это пробел 
// console.log(message.split(",")); // [Welcome to Bahamas!]



// // из массива делает строку 
// console.log( clients.join("")); //"MangoPOlyAjax"
// console.log( clients.join(",")); //"Mango,POly,Ajax"
// console.log( clients.join("-")); //"MangoPOlyAjax"

//==

// console.log( clients.indexOf("Poly")); //1
// console.log( clients.indexOf("MOnkong")); //-1

// console.log( clients.includes("Poly")); //true
// console.log( clients.includes("MOnkong")); //false


//===
// clients.push("Margo"); // добавить в конец
// clients.unshift("Sergio"); // добавить в начало
// console.log(clients);

// //==
// const clients = ["Mango", "Poly", "Ajax", "Romeo" , "Gringo"];
// clients.splice(0,3); // Удалит все элементы с 0 по 3 
// console.log(clients);



// //==
// const clients = ["Mango", "Poly", "Ajax", "Romeo" , "Gringo"];
// clients.splice(1,0, 'Evhen', `Artem`); // добавляем элементы с индекса 1
// console.log(clients);


// удаление
// const clients = ["Mango", "Poly", "Ajax", "Romeo" , "Gringo"];
// clients.splice(1,1, "Python");
// console.log(clients);

// удаление
// const clients = ["Mango", "Poly", "Ajax", "Romeo" , "Gringo"];
// clients.splice(1,3, "Python");
// console.log(clients);


// //соединяет два массива
// const clients = ["Mango", "Poly", "Ajax", "Romeo" , "Gringo"];

// const newClients = ["Adam", "Franky"];
// const newArr= clients.concat(newClients); // создает новый массив из 2 
// console.log("newArr", newArr);

//Оператор цикла do...while создает цикл, который выполняет блок кода до тех пор, пока expression не станет равным false.

// let input = 0;

// do {
//   input = Number( prompt('Введите число больше 10', '') );
// } while(input <= 10);


// // колличество переменных
// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length);


// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log((users.length));
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// console.log();
// arr = string.split(" "); 

// let string = `Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr`
// let arr;


// arr = string.split(" ")
// console.log(arr);

// for (let i = 0; i < arr.length; i +=1) {
//     console.log(i);    
// }

// for (let i = 0; i < arr.length; i +=1) {
//     console.log(arr.indexOf (arr[i]));    
// }


// for (const i of arr) {
// console.log(arr.indexOf(i)+ ':' + i);

// }
// console.log();


// let num =100;
// let input;
// do {
//   input = Number (prompt ("ввпести число больше 100"))
// }

// while (input < num);





/*
/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for


const min = 1;
const max = 100;
*/

// const min =1;
// const max = 100;

// for (let i=min; i < max; i+=1) {
//     if ( i%3===0) { 
//         console.log ("Feez");
//     } else if (i%5===0 && i%3!==0) {
//         console.log ("Buzz")
//     }
//     else { 
//         console.log(i)
//     }
// }

//==

/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (const index of numbers) {
//     if (index > num) {
//         newArray.push(index);
//     }
// }
// console.log(newArray);


/*
//   Напишите скрипт, который проверяет произвольную строку 
//   в переменной string и находит в ней самое длинное слово,
//   записывая его в переменную longestWord.
// */

// const string = "May the force be with you";
// let longestWord;

// const newArray = string.split(" ");
// longestWord = newArray[0];
// for (const value of newArray) {
//     if (value.length > longestWord.length) {
//         longestWord = value
//     }
// }


// console.log(longestWord); // 'force'
// //==

/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/


let arr = [];
let ask;
let sum = 0;
do {
    ask = Number(prompt("Enter number"));
    if (ask !== 0) {

        arr.push(ask);

    }
    console.log(ask);
    console.log(arr);

} 
while (ask);
    if (arr.length !== 0) {

        for (const iteration of arr) {
            sum += iteration;
        }
    }

    console.log("The sum is: " + sum);