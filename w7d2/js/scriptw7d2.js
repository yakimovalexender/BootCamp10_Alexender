`use strict`;
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

/*
const items = document.querySelectorAll(`.categories >li`);
// items.forEach(item => console.log(item.textContent );
// items.forEach(function(item,i,arr) {item.children.length});
// items.forEach(item => console.log(item.firstChild.textContent));
items.forEach(item => console.log(`Categories: ${item.firstChild.textContent}); Length: ${item.childNodes[1].childElementCount}`))
;
// console.log(items);
*/

/*
const items = document.querySelectorAll('.categories >li');
// items.forEach(function(item, i, arr){item.children.length}return item[i]);
items.forEach(item => console.log(`Categories: ${item.firstChild.textContent} Length: ${item.childNodes[1].childElementCount}`));
// console.log(items);
*/
//=============
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// let list = document.querySelector('.list');
// list.firstChild.style.color = `red`
//=====
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const list = document.querySelector('.list');
// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const mark = elements.reduce((string, i)=>string + `<li>${i}</li>`,"");

// list.innerHTML = mark;
//======

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/
/*
const galleryItems = [
    {
      url:
        "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat"
    },
    {
      url:
        "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish"
    },
    {
      url:
        "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Two Brown Hen and One Red Rooster"
    },
    {
      url:
        "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running"
    },
    {
      url:
        "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Macaw Birds"
    },
    {
      url:
        "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "2 Lion on Grass Field during Daytime"
    }
  ];
  const gallery = document.querySelector('.gallery');
  const mark = galleryItems.reduce((pic,i)=> pic + `<li><img class='sizes' src=${i.url} alt=${i.alt}></li> `, '');
  gallery.innerHTML = mark;
  const sizes = document.querySelectorAll('.sizes');
  sizes.forEach(i => i.style.width = '300px');
  gallery.style.listStyle = 'none';

  */


// =====

// function createMovieCard() {
//     let movie = document.querySelector('.movie');
//     movie.innerHTML = `<img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image">
  
//   <div class="movie__body">    
//   <h2 class="movie__title">The Godfather</h2>
//   <p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
//     would-be killers, launching a campaign of bloody revenge.</p>
    
//      <p class="movie__date">Released: 1972-03-14</p>
//      <p class="movie__rating">Rating: 8.6</p>
//       </div>`
//     // let elem = document.createElement('img');
//     // elem.classList.add('movie__image');
//     // elem.src='http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
//     // elem.alt='movie image';
    
//     // let elemTextContainer = document.createElement('div');
//     // let textMain = document.createElement('h2');
//     // textMain.classList.add('movie__title')
//     // let textP1 = document.createElement('p');
//     // textP1.classList.add('movie__description')
//     // let textP2 = document.createElement('p');
//     // textP2.classList.add('movie__date')
//     // let textP3 = document.createElement('p');
//     // textP3.classList.add('movie__rating');
    
//     // textMain.textContent = 'The Godfather';
//     // textP1.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';
//     // textP2.textContent = 'Released: 1972-03-14';
//     // textP3.textContent = 'Rating: 8.6';
//     // elemTextContainer.append(textMain,textP1,textP2,textP3);
//     // movie.append(elem, elemTextContainer);
    
// }
// createMovieCard(); 


//====

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

// function randomColor() {
//     let result = '';
//     let max = 255;
//     let a = Math.floor(Math.random() * (255 + 1) );
//     let b = Math.floor(Math.random() * (255 + 1) );
//     let c = Math.floor(Math.random() * (255 + 1) );
//     return result = `rgb(${a}, ${b}, ${c})`;
// }
// console.log(randomColor());
//====

/*
function randomColor() {
    let result = '';
    let max = 255;
    return result = `rgb(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))})`;
}
console.log(randomColor());

function createBoxes(num) {
    let container = document.createElement('div');
    let mainDiv = document.querySelector('#root');
    let i = 1;
    let width = 30;
    let height = 30;

    do {
        // let divs = document.createElement("div");
        // divs.style.backgroundColor = randomColor();

        // divs.style.width = width +"px";
        // divs.style.height = height + "px" ;

        container.innerHTML += `<div style='width: ${width +"px"}; height: ${height + "px"}; background-color: ${randomColor()} '></div>`;
        i++;
        width += 10;
        height += 10;

    } while (i <= num);

    mainDiv.append(container);
}

createBoxes(4);
Collapse
*/



