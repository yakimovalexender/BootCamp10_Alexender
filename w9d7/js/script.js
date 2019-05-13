var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');


showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

var imagesUrls = [];
imagesUrls.push('img/vinni.jpg');
imagesUrls.push('img/owl.jpeg');
imagesUrls.push('img/piggy.jpeg');
imagesUrls.push('img/donkey.jpeg');


var currentImageIndex =  0 ; 

slideImage.src = imagesUrls[currentImageIndex]



function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];

    
}


function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
if (currentImageIndex === (imagesUrls.length-1)){
    showNextBtn.disabled = true;
}
    }