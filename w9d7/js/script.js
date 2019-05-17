var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');


showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

var imagesUrls = [];
imagesUrls.push('img/car1.jpg');
imagesUrls.push('img/car2.jpg');
imagesUrls.push('img/car3.jpeg');
imagesUrls.push('img/car4.jpg');


var currentImageIndex =  0 ; 

slideImage.src = imagesUrls[currentImageIndex]
showPrevBtn.disabled = true;


function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;
    if (currentImageIndex === 0){
        showPrevBtn.disabled = true;
    }
    
}


function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;
if (currentImageIndex === (imagesUrls.length-1)){
    showNextBtn.disabled = true;
}
}