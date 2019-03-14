'use strict';
// let num = 50;
// while (num < 55 ) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;

// }
// while (num < 65);

// for (let i = 1; i < 8; i ++) {
//     if (i==6) {
//         // break
//         continue
//     }
//     console.log(i);

// }
// 

// //====

// let start = Date.now();
// console.log(start);

// let timer = setInterval(function () {
//             let timePasset = Date.now() - start;
//             console.log(timePasset);
            
//             if (timePasset >= 2000) {
//                 clearInterval(timer);
//                 return;
//             }
//                 draw(timePasset);

//             }, 20);

//         function draw(timePasset) {
//             banana.style.left = timePasset / 5 + 'px'
//         }


// let date = new Date();
// console.log("Date: " + date);
// console.log("getDate(): " + date.getDate());
// console.log("getDay(): " + date.getDay());
// console.log("getMonth(): " + date.getMonth());
// console.log("getFullYear(): " + date.getFullYear());
// console.log("getHours(): " + date.getHours());
// console.log("getMinutes(): " + date.getMinutes());
// console.log("getSeconds(): " + date.getSeconds());
// console.log("getMilliseconds(): " + date.getMilliseconds());
// console.log("getTime(): " + date.getTime());

// var target_date = new Date().getTime() + (1000*3600*48); // установить дату обратного отсчета

// console.log(target_date);

// var days, hours, minutes, seconds; // переменные для единиц времени
 
// var countdown = document.getElementById("tiles"); // получить элемент тега
 
// getCountdown();
 
// setInterval(function () { getCountdown(); }, 1000);
 
// function getCountdown(){
 
//     var current_date = new Date().getTime();
//     var seconds_left = (target_date - current_date) / 1000;
 
//     days = pad( parseInt(seconds_left / 86400) );
//     seconds_left = seconds_left % 86400;
          
//     hours = pad( parseInt(seconds_left / 3600) );
//     seconds_left = seconds_left % 3600;
           
//     minutes = pad( parseInt(seconds_left / 60) );
//     seconds = pad( parseInt( seconds_left % 60 ) );
 
//     // строка обратного отсчета  + значение тега
//     countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
// }
 
// function pad(n) {
//     return (n < 10 ? '0' : '') + n;
// }

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Если все ок, то вызываем resolve и передаем данные
      resolve("Data passed into resolve function :)");
  
      // Если что-то не так, вызваем reject и передаем ошибку
      // reject("Error passed into reject function :(")
    }, 2000);
  });
  
  // выполнится мгновенно
  console.log("BEFORE promise.then");
  
  const onResolve = data => {
    console.log("INSIDE promise.then - onResolve");
    console.log(data); // "Data passed into resolve function :)"
  };
  
  const onReject = error => {
    console.log("INSIDE promise.then - onReject");
    console.log(error); // "Error passed into reject function :("
  };
  
  promise.then(
    // будет вызвана через 2 секунды, если обещание выполнится успешно
    onResolve,
    // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
    onReject
  );
  
  // выполнится мгновенно
  console.log("AFTER promise.then");
