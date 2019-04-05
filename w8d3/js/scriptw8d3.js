'use strict'



// const singleBtn = document.querySelector('#single');

// // Для обработчика события можно (и желательно) 
// // использовать отдельную функцию, ссылку на которую 
// // передаем вторым аргументом в addEventListener
// const handleClick = () => alert('CLICK!');

// singleBtn.addEventListener('click', handleClick);


// //========================================================
// // Можно вешать более одного обработчика на элемент, 
// // даже на одно и тоже событие
// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => alert('First callback!');
// const secondCallback = () => alert('Second callback!');
// const thirdCallback = () => alert('Third callback!');

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);


/* module-12-task-03 https://codepen.io/goit-fe-adv/pen/JrmdpW?editors=0010
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//     let date = new Date (time)
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     if(seconds < 10){
//      seconds = '0' + seconds;
//     }
//     let milisec = parseInt((date.getMilliseconds()) / 100);

//      return `${minutes} : ${seconds}. ${milisec}`;
//     }
//     console.log(getFormattedTime(Date.now()))
//     console.log(
//      getFormattedTime(1523621052858)
//     ); // 04:12.8

//     console.log(
//      getFormattedTime(1523621161159)
//     ); // 06:01.1

//     console.log(
//      getFormattedTime(1523621244239)
//     ); // 07:24.2

// ===============end=======


//    module-12-task-02
// https://codepen.io/goit-fe-adv/pen/jKZNYd?editors=0010
// const colors = [
//     "#FFFFFF",
//     "#2196F3",
//     "#4CAF50",
//     "#FF9800",
//     "#009688",
//     "#795548"
//   ];

// const start = document.querySelector('[data-action="start"]');
// const stop = document.querySelector('[data-action="stop"]');
// const body = document.querySelector('body');
// start.addEventListener('click', changColor);
// stop.addEventListener('click', stopColor);
// let inter;

// function changColor(){
//   inter = setInterval(() => {
//     let rand = Math.floor(Math.random() * colors.length);
//     body.style.backgroundColor = colors[rand];
//     console.log(rand);    
//   }, 1000);
//   start.disabled = true;

// };

//   function stopColor(){
//     clearInterval(inter);
//     start.disabled = false;
//   }

//   ==========end

// module-12-task-04 https://codepen.io/goit-fe-adv/pen/yKWjxp?editors=1000

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/
/*
const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};

/*
* Вспомогательные функции
*/

/*
 * Обновляет поле счетчика новым значением при вызове
 * аргумент time это кол-во миллисекунд
 */
// function updateClockface(elem, time) {
// Используйте функцию getFormattedTime из задания #1
// elem.textContent = getFormattedTime(time);
// };

// function

/*
 * Подсветка активной кнопки
 */
/*
function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
}
// ===end
*/

// module-12-task-05 https://codepen.io/goit-fe-adv/pen/ZxNRRN?editors=0010

/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 * 
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 * 
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 * 
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 * 
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 * 
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
 */

// const DELAY = 1000;
// const quantity = 100;

// function processOrder(order){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(!isNaN(order)){
//         if(order <= quantity){          
//           resolve("Ваш заказ готов!")
//         }else resolve("К сожалению на складе не достаточно товаров!");
//       }else reject("Некорректный ввод!");
//     },DELAY/2)
//   }) 
// };

// ===home work
/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/

// class Stopwatch {
//     constructor (elem) {
// this.elem = elem;
// this.startTime = null;
// this.deltaTime = null;
// this.intervalFunction = null;
//     }


// get creatTimer() {
//     this.elem.innerHTML = '<div class="stopwatch"> <p class="time js-time">00:00.0</p><button class="btn js-start">Start</button><button class="btn js-take-lap">Lap</button> <button class="btn js-reset">Reset</button></div> <ul class="laps js-laps"></ul>';
// }
// get startTimer() {
//     if (this.deltaTime === null ? this.startTime = Date.now() : this.startTime = (Date.now)) 

// }
// }

// let arr = [1,2,3,4,5];
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.push('5');
// console.log(arr);

// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

// console.log(arr);
// console.log(arr.length);
// let num = 10;
// function showFirstMessage(text) {
//     alert(text);
// let num = 20 ;
// console.log(num);

//   }

// showFirstMessage(`1`);

// console.log(num);

// function retVar() {
//   let num=50;
//   return num;
// }
// let anotherNum = retVar();
// console.log(anotherNum);


// let calc = (a,b) => a+b;
// console.log(calc(3,4));

// let a = 3;
// function addTwo (x) {
//   let ret = x + 2 ;
//   return ret
// }
// let b = addTwo(a)
// console.log(b);


// let temperatureDegree = document.querySelector('.temperature-degree');
// let temperatureDescription =  document.querySelector('.temperature-description')

// let onLoad = ()=> {
//   let lat;
//   let long;

//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(position => {
//       // console.log(navigator.geolocation);
//       // console.log(position);
//       lat = position.coords.latitude;
//       long =  position.coords.longitude;

//       let proxy = 'https://cors-anywhere.herokuapp.com/';

//       let api = `${proxy}https://api.darksky.net/forecast/f9fe7205a67a360e338008aba15db943/${lat},${long}`;

//       fetch(api)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           const {summary, temperature} = data.currently;
//           temperatureDegree.textContent = temperature;
//           temperatureDescription.textContent = summary;
//         })

//     })
//   }  
// }
// window.addEventListener('load', onLoad);
// let num = 29 ;
// while (num <55) {
//   console.log(num);
//   num++;
// }

// let num = 50;
// do { 
//   console.log(num);
//   num++;
// }
// while (num < 55);


// for (let i = 1; i < 8; i++) {
//   if (i == 6) {
//      continue
//     }
//   console.log(i);

// }


// console.log(fruits.length)
// let first = fruits[0];
// console.log(first);

// let last = fruits[fruits.length - 1];
// console.log(last);

// fruits.forEach(function(item, index, array) {
//   console.log(item , index,);

// });

// let newLength = fruits.push('Апельсин');
// console.log(fruits);


// let lastarr = fruits.pop();
// console.log(fruits);


// let firstarr = fruits.shift();
// console.log(fruits);

// let firstarradd = fruits.unshift("Клубника");
// console.log(fruits);

// fruits.push("Mango");
// console.log(fruits);

// let pos = fruits.indexOf("Банан");
// console.log(pos);

// let removeItem = fruits.splice(pos, 1);
// console.log(removeItem);


// let vegetables = ['капуста' , 'репа' , 'редиска', 'морковка' ];
// console.log(vegetables);

// let pos = 1 , n = 2;

// let removedItems = vegetables.splice(pos, n );
// console.log(vegetables);

// console.log(removedItems);

// let fruits = ['Яблоко','Банан'];

// let shallowCopy = fruits.slice();
// console.log(fruits);

// console.log(shallowCopy);


// dop1_1
// let name;
// let price;
// name = 'Генератор защитного поля';
// price = 1000;
// console.log(price);
// price = 2000;
// console.log(price);
// let information;
// information = ('Выбран ' + name + ' цнеа за штуку ' + price + ' кредитов');

// // alert(information);
// console.log(information);

// dop 1_2

/*
  Есть три переменные содержащие составляющие даты: день, месяц, и год. 
  
  Создай переменную date, в которую запиши полную дату в формате день\месяц\год
  Создай переменную message, в которую запиши сообщение "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
  
  PS: используя шаблонные строки.
*/

// const day = 17;
// const month = 10;
// const year = 2048;

// let date = (day +'/' + month + '/' + year);
// console.log(date);
// let message = ('Доброе утро, cегодня ' + date + ', за бортом отличная погода!');
// console.log(message);

//


// dop 1_3
/*
  Есть три переменные name, date и roomType, содержащие имя гостя, 
  дату его прибытия на отдых и тип комнаты отеля.
  
  Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
*/

// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';
// let message = (name + ' прибывает на отдых ' + date + ' в ' + roomType);
// console.log(message); // Mango прибывает на отдых 14/08/2137 в люкс

//dop 1_4

/*
  Напиши скрипт который: 
  
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Ожидаю ввода пароля'.
  
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
    
  - Если что-то другое — показывать alert с сообщением 'Активирована система защиты!'
*/

// const correctPassword = '123';
// const enterMessage = prompt('Введите пароль доступа');
// console.log(enterMessage);


// switch (enterMessage) {
//   case null:
//    alert('Ожидаю ввода пароля');
//    break;

// case correctPassword:
// alert('Доступ в секретный бункер разрешен!');
// break;
// default:
// alert('Активирована система защиты!');
// };

/*
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  
  Сравни эти значения и по результатам выведи:
  
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"
    
  Проверь работоспособность кода с разными значениями переменной ordered.
*/

// const total = 100;
// const ordered = +prompt('Enter quantity goods');
// // console.log(ordered,typeof(ordered));
// // console.log(typeof(total));

// switch (true) {
//   case (ordered == total):
//     alert("Вы забираете весь товар cо склада!")
//     console.log(ordered);
//     break;


//   case (ordered > total):
//     alert("На складе недостаточно товаров!")
//     break;


//   default:
//     alert("Заказ оформлен, с вами свяжется менеджер")
// };

// v2

// const total = 100;
// const ordered = +prompt('Enter quantity goods');

// if ( ordered == total) {
//   alert("Вы забираете весь товар cо склада!");
// }
// if (ordered > total) {
//   alert("На складе недостаточно товаров!");
// }
// if (ordered == null) {
//   alert('You need entrer quantity goods!!!');
// }
// if (ordered < total) {
// alert("Заказ оформлен, с вами свяжется менеджер");
// };

/*
  Напиши скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/ 

// let question = + prompt('Enter any whole number')
// console.log(question,typeof(question));

// if (question == 0) {
//   alert('so... OK .... bye-bye !!!');
// }
// if (parseInt(question) != question) {
//   alert('Its not whole number !!!');
// }
// if (parseInt(question) ==question) {
//   alert ('Thanks!');
// };

/* 
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное

  PS: попробуй использовать тернарный оператор
*/

// const value = Number.parseInt(Math.random() * 100);
// console.log(value);
// let type=value%2 == 0 ? "even" : "odd";
// // even= (value%2);

// console.log(`${value} is ${type}`);

/* 
  Создай скрипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
// let select = +prompt('Enter number 1-5');
// console.log(select);
// switch(select) {
//   case 0 :
  
  
//   alert('Очень жаль, приходите еще!');
//   break;

//   case 1 :
//   alert('Каталог хостелов');
//   break;

//   case 2 :
//   alert('Каталог бюджетных отелей');
//   break;

//   case 3 :
//   alert('Каталог отелей ***');
//   break;

//   case 4 :
//   alert('Каталог отелей ****');
//   break;
  
//   case 5 :
//   alert('Каталог fine отелей');
//   break;

//   default :
//   alert("Неверный ввод, возможные варианты 1-5!")
// };
/*
1. Задача 1

Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

    Если нажали Cancel, записать в message строку 'Отменено пользователем!'
    В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
    В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
    После всех проверок вывести в alert значение переменной message.

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
*/

// const ADMIN_PASSWORD = 'm4ng0h4ckz';
// let question = prompt('Enter password')
// let message = question;
// if (message == null) {
//   alert('Отменено пользователем!');
// };
// if(message==ADMIN_PASSWORD) {
//   alert('Добро пожаловать!');
// };

// if(message !=ADMIN_PASSWORD) {
//   alert('Доступ запрещен, неверный пароль!');
// };



// alert(question);

/*
На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:

    Если в prompt была нажата Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
    В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
    Проверяет сможет ли пользователь оплатить заказ:
        если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
        в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.
*/

/*
let credits = 23580;
let pricePerDroid = 3000;
let question = +prompt('How many droids do you want to buy?');
let totalPrice = (question * pricePerDroid);
console.log( totalPrice);

let totalMoney = (credits - totalPrice);
if(question == 0) {
  alert('Cansel user');
};

if( totalPrice < credits) {
  alert("you buy " + (question) + " droids, you have " + (totalMoney));
};

if( totalPrice > credits) {
  alert('you have NO money! You have only ' + credits + ' credits');
}
*/

/*
Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, что пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в консоль сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

    китай - 100 кредитов
    южная америка - 250 кредитов
    австралия - 170 кредитов
    индия - 80 кредитов
    ямайка - 120 кредитов

PS: используй switch
*/


let country = prompt('Enter country from which you want to arrange delivery ');
let countryRegister = country.toLowerCase();
console.log( countryRegister);

switch (countryRegister) {
  case 'китай' :
  alert('100 кредитов');
  break;
  case 'южная америка':
  alert('250 кредитов');
  break;
  case 'австралия':
  alert('170 кредитов');
  break;
  case 'индия':
  alert('80 кредитов');
  break;
  case 'ямайка':
  alert('120 кредитов');
  break;
}