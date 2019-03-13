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

let buttonClick = document.querySelector(`button`);
let input1 = document.querySelector(`#input1`);
let input2 = document.querySelector(`#input2`);


let funkButn = () => {
    let buf = input1.value;
    input1.value = input2.value;
    input2.value = buf;
}
buttonClick.addEventListener(`click` , funkButn)