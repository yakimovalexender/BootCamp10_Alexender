
let firstNameId = 'first-name';
let firstNameEl = document.getElementById(firstNameId);

let lastNameId = 'last-name';
let lastNameEl = document.getElementById(lastNameId);

let adressId = 'adress';
let adressEl = document.getElementById(adressId);

let citiesId = 'cities';
let citiesEl = document.getElementById(citiesId);

let hobbiesId = 'hobbies';
let hobbiesEl = document.getElementById(hobbiesId);

let avatarWrapperId = 'avatar-wrapper';
let avatarWrapperEl = document.getElementById(avatarWrapperId);

let avatarId = 'avatar';
let avatarEl = document.getElementById(avatarId);

firstNameEl.value = 'Andrey';
lastNameEl.className = 'last-name-input default-input error-input';
avatarEl.src='https://icdn.lenta.ru/images/2019/04/13/00/20190413005744310/pic_6c41035026b5a1cbe8fc4eef2af7b6a4.jpg'
// lastNameEl.setAttribute('value', 'kamasutra');

avatarEl.title='im aWatar!';
window.alert(lastNameEl.className);
lastNameEl.title='wrong last name'
