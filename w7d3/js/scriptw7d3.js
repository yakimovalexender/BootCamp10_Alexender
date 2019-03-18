'use strict'

/*
/Задача №1
//Алерт по нажатию на кнопку.
//При нажатии на кнопку "Нажми на меня"
//выводиться сообщение 'Привет!
<html>
<head>
   <meta charset="utf-8">
   <title>Задачи по DOM</title>
   <style>
   </style>
   <script>
   </script>
</head>
<body>
 <button >Нажми на меня!</button>
</body>
</html>

//Задача №2
//Изменение текста в инпуте.
//По нажатию на кнопку - изменяеться текст в импуте
<html>
<head>
   <meta charset="utf-8">
   <title>Задачи по DOM</title>
   <style>
   </style>
   <script>
   </script>
</head>
<body>
<button>Нажми на меня</button>
<input type="text" id="input" value="???">
</body>
</html>

//Задача №3
//Изменение текста в инпуте.
//По нажатию на кнопку -  она выводит алертом содержимое инпута
<html>
<head>
   <meta charset="utf-8">
   <title>Задачи по DOM</title>
   <style>
   </style>
   <script>
   </script>
</head>
<body>
<button >Нажми на меня</button>
<input type="text" id="input" value="???">
</body>
</html>

//Задача №4
//Изменение текста в инпуте.
//По нажатию на кнопку -  она выводит алертом содержимое инпута, возведенное в квадрат
<html>
<head>
   <meta charset="utf-8">
   <title>Задачи по DOM</title>
   <style>
   </style>
   <script>
   </script>
</head>
<body>
<button >Нажми на меня</button>
<input type="text" id="input" placeholder="Введите число!">
</body>
</html>

//Задача №5
// Задача. Кнопка осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную 
// сменить содержимое инпутов:
<button >Нажми на меня</button>
<input type="text" id="input1" value="!!!"><input type="text" id="input2" value="???">

//Задача №6
// Задача. При нажатии на кнопку - поменяется ее текст:
<input type="button"  value="Нажми на меня">

//Задача №8
// Задача. При нажатии на кнопки -  одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует:
<button >Заблокировать</button>
<button >Отблокировать</button>
<input type="text" id="input" value="Какой-то текст!">
*/



// $('.button').click(function(){
//     alert('Привет');
// });

// 

// //8,1--
// const x = document.querySelector(`button`);
// const oneClick = () => alert (`Привет`);
// x.addEventListener(`click`, oneClick)

// 8,2 
// let button = document.querySelector(`button`);
// let enterButton = () => input.value=`Hello word`;
// button.addEventListener(`click` , enterButton)
//===

// 8.3
// Изменение текста в инпуте.
// По нажатию на кнопку -  она выводит алертом содержимое инпута
// let button = document.querySelector(`button`);
// let enterButton = () => {
//     let inp = document.querySelector(`input`);
//     alert(inp.value);
// }
// button.addEventListener(`click`, enterButton);

//8.4====
//Изменение текста в инпуте.
//По нажатию на кнопку -  она выводит алертом содержимое инпута, возведенное в квадрат


// const singleBtn = document.querySelector('.btn');
// const singleNew = function(){
//   const singleInput = document.querySelector('#input');
//   if(!isNaN(singleInput.value)){
//     let newNum = singleInput.value * singleInput.value;
//     alert(newNum);
//   }else{
//     alert('Не число');
//   }

// } 
// singleBtn.addEventListener(`click` , singleNew);

// 8.5
// Задача. Кнопка осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную 
// сменить содержимое инпутов:
// <button >Нажми на меня</button>
// <input type="text" id="input1" value="!!!"><input type="text" id="input2" value="???"></input>

// let buttonClick = document.querySelector(`button`);
// let input1 = document.querySelector(`#input1`);
// let input2 = document.querySelector(`#input2`);


// let funkButn = () => {
//     let buf = input1.value;
//     input1.value = input2.value;
//     input2.value = buf;
// }
// buttonClick.addEventListener(`click` , funkButn)

// let answer = prompt("есть ли тебе 18?");
// console.log(typeof(answer));
// let money;
// let time;

// let answer = money = +prompt("каков твой бюджет на месяц?")
// // let money = answer
// let answerDate = time = prompt("Введите дату в формате YYYY-MM-DD")
// // let answerDate = time;
// console.log(money);
// console.log(typeof (money));

// console.log(time);
// console.log(typeof (time));

// appData = {
//    budjet: money,
//    timeData: "answerDate",
// };

// console.log(appData.budjet);
// // console.log(appData.timeData);

// let x = 5; alert( x++ )
// console.log(x);

// let x = [ ] + false - null + true
// console.log(x);
// let y = 1; let x = y = 2; alert(x);
// let x = [ ] + 1 + 2;
// console.log(x);
// alert( "1"[0] )

// alert( null || 2 && 3 || 4 );

// let a = [1, 2, 3]; 
// let b = [1, 2, 3];
// a = b ;
// console.log(a);
// alert( +"Infinity" );
// let a = "ёжик" > "яблоко"
// console.log(a);

// let a = 0 || "" || 2 || undefined || true || falsе;
// console.log(a);


// let num = 50;

// // while ( num <=99) {
// //    console.log(num);
// //    num++;
// // }
//  do {
//     console.log(num);
//     num++;
//  }
//  while (num < 55)

// for ( let i = 1; i < 8; i++) {
//    if (i == 6) {
//    break
//    }
//    console.log(i);

// }
let money, time;

function start() {
   money = +prompt("Введите ваш бюджет на месяц", '');
   time = prompt('Введите дату в формате YYYY-MM-DD', '');

   while(isNaN(money) || money == "" || money == null) {
      money = +prompt("Введите ваш бюджет на месяц", '');
   }
}
start();


let appData = {
   budget: money,
   expenses: {},
   optionalExpenses: {},
   income: [],
   timeData: time,
   saving: true
};

function chooseExpenses() {
   for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов этом месяце", ''),
         b = prompt("Во сколько это обойдется", '');

      if ((typeof (a))=== `string` && (typeof (a)) != null && (typeof (b)) != null 
      && a != '' && b != '' && a.length < 50) {
         console.log("done");
         appData.expenses[a] = b;
      } else {
         i = i - 1;
      }
   }

}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
   console.log("Мнимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
   console.log("Высокий уровень достатка");
} else {
   console.log("возникла ошибка");

}

function checkSavings () {
   if (appData.saving == true) {
      let saving = +prompt ("Какова сумма накоплений?", ''),
      percent = +prompt("Под какой процент?", '');
      appData.monthIncome = (saving/100/12*percent).toFixed();
      alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
   }
}
checkSavings();