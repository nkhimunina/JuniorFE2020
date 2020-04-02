var slideDots = document.querySelectorAll('.slider-section.first .carousel-dot');
var slides = document.querySelectorAll('.slider-section.first .carousel-slide');
function onDotButtonClick(event) {
    var activeDotButton = document.querySelector('.slider-section.first .carousel-dot.active');
    var clickedDotButton = event.target;
    activeDotButton.classList.remove('active');
    clickedDotButton.classList.add('active');
    // console.log(event);
    var activeSlide = document.querySelector('.slider-section.first .carousel-slide.active');
    activeSlide.classList.remove('active');
    for (var i = 0; i < slideDots.length; i++) {
        if (clickedDotButton === slideDots[i]) {
            slides[i].classList.add('active');
            currentSlide = i;
            clearInterval(timerId);
            timerId = setInterval(doFade, 3500);
        }
    }
}
var activeDotButton = document.querySelector('.slider-section.second .carousel-dot');
function onDotButtonClick2(event) {
    // const activeDotButton = document.querySelector('.slider-section.second .carousel-dot.active');
    var clickedDotButton = event.target;
    activeDotButton.classList.remove('active');
    clickedDotButton.classList.add('active');
    activeDotButton = clickedDotButton;
    var slideDots = document.querySelectorAll('.slider-section.second .carousel-dot');
    var carouselSlidesElem = document.querySelector('.slider-section.second .carousel-slides');
    for (var i = 0; i < slideDots.length; i++) {
        if (clickedDotButton === slideDots[i]) {
            carouselSlidesElem.style.transform = "translateX(-" + i * 100 + "%)"; //интерполяция строк
        }
    }
}
var currentSlide = 0;
var timerId = setInterval(doFade, 3500);
function doFade() {
    slideDots[currentSlide].classList.remove('active');
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    if (currentSlide === slideDots.length) {
        currentSlide = 0;
    }
    slideDots[currentSlide].classList.add('active');
    slides[currentSlide].classList.add('active');
}
