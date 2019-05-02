/*


function alertValue(elementParametr) {
    console.log(elementParametr.value);
    console.log(elementParametr.className);
}


let firstNameId = 'first-name';
let firstNameEl = document.getElementById(firstNameId);
// console.log(firstNameEl.value);
// console.log(firstNameEl.className);
alertValue(firstNameEl);


let lastNameId = 'last-name';
let lastNameEl = document.getElementById(lastNameId);
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);
alertValue(lastNameEl);


let adressId = 'adress';
let adressEl = document.getElementById(adressId);
// console.log(adressEl.value);
// console.log(adressEl.className);
alertValue(adressEl);

let citiesId = 'cities';
let citiesEl = document.getElementById(citiesId);
alertValue(citiesEl);

let hobbiesId = 'hobbies';
let hobbiesEl = document.getElementById(hobbiesId);
// console.log(hobbiesEl.value);
// console.log(hobbiesEl.className);
alertValue(hobbiesEl);


let avatarWrapperId = 'avatar-wrapper';
let avatarWrapperEl = document.getElementById(avatarWrapperId);

let avatarId = 'avatar';
let avatarEl = document.getElementById(avatarId);

// function alertValue() {
//     console.log(firstNameEl.value);
//     console.log(lastNameEl.value);
//     console.log(adressEl.value);
//     console.log(citiesEl.value);

// }



// alertValue();


// firstNameEl.value = 'Andrey';
// // console.log(firstNameEl.value);
// // console.log(firstNameEl.className);
// alertValue(firstNameEl);



lastNameEl.className = 'last-name-input default-input error-input';
avatarEl.src = 'https://icdn.lenta.ru/images/2019/04/13/00/20190413005744310/pic_6c41035026b5a1cbe8fc4eef2af7b6a4.jpg'
// lastNameEl.setAttribute('value', 'kamasutra');
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);


avatarEl.title = 'im aWatar!';
// console.log(lastNameEl.className);
// alertValue(avatarEl)

lastNameEl.title = 'wrong last name'
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);
// alertValue(lastNameId);
*/
/*
function firsrNameLog() {
    

let firstNameId='first-name';
let firstNameEl = document.getElementById(firstNameId);

console.log(firstNameEl.value);
}

function lastNameLog() {
    

let lastNameId = 'last-name';
let lastNameEl = document.getElementById(lastNameId);

console.log(lastNameEl.value);
}

lastNameLog();
lastNameLog();
lastNameLog();
firsrNameLog();
firsrNameLog();

*/
/*
function logValue(id) {
    let el = document.getElementById(id);
    console.log(el.value);

}

function getValue(id) {
    let el = document.getElementById(id);
return el.value;
}

let firstNameId = 'first-name';
let lastNameId = 'last-name'


logValue(firstNameId);
logValue(lastNameId);

let value = getValue(lastNameId)

alert(value)
*/

/*
function addErrorClass(elementId) {
    let element = document.getElementById(elementId);
    element.className = 'error-input';
}

function addErrorClassToAllInput() {
addErrorClass('first-name');
addErrorClass('last-name');
addErrorClass('adress');
}

// addErrorClass('last-name');
// addErrorClassToAllInput();

// setTimeout(addErrorClassToAllInput,2000);
// addErrorClassToAllInput();
let sendButton = document.getElementById('send buttion');

sendButton.addEventListener('click',addErrorClassToLastName);

function addErrorClassToLastName() {
    addErrorClass('last-name');
}

function onFirstNameKeyup() {
    addErrorClass('first-name');
}

let firstNameEl = document.getElementById('first-name');
firstNameEl.addEventListener('keyup', onFirstNameKeyup);
*/

let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDevide = document.getElementById('buttonDevide');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;

    } else if (operationCode ==='*') {
        var result = number1 * number2;

    } else if ( operationCode ==='/') {
        var result = number1 / number2;

    }
    else { 
        alert('operation not find')
    }
    alert(result);
}




function onOperationButtonClick(eventObject) { 
var clickedElement = eventObject.currentTarget;
var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

var operationButtons = [buttonPlus,buttonMinus,buttonMultiply,buttonDevide];

for (var i=0 ; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);
}
  

// function addCommonEventListener(i) {
//     operationButtons[i].addEventListener('click', onOperationButtonClick );  
// }

// var operationButtons= [ buttonPlus,buttonMinus, buttonMultiply, buttonDevide];

// addCommonEventListener(0);
// addCommonEventListener(1);
// addCommonEventListener(2);
// addCommonEventListener(3);

// operationButtons[0].addEventListener('click', onOperationButtonClick );
// operationButtons[1].addEventListener('click', onOperationButtonClick );
// operationButtons[2].addEventListener('click', onOperationButtonClick );
// operationButtons[3].addEventListener('click', onOperationButtonClick );




