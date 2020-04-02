const slideDots = document.querySelectorAll('.slider-section.first .carousel-dot');
const slides = document.querySelectorAll('.slider-section.first .carousel-slide');

function onDotButtonClick(event: MouseEvent) {
    const activeDotButton = document.querySelector('.slider-section.first .carousel-dot.active');
    const clickedDotButton: HTMLElement = event.target as HTMLElement;
    activeDotButton.classList.remove('active');
    clickedDotButton.classList.add('active');
    // console.log(event);

    const activeSlide = document.querySelector('.slider-section.first .carousel-slide.active');
    activeSlide.classList.remove('active');

    for (let i = 0; i < slideDots.length; i++) {
        if (clickedDotButton === slideDots[i]) {
            slides[i].classList.add('active');
            currentSlide = i;
            clearInterval(timerId);
            timerId = setInterval(doFade, 3500);
        }
    }
}

let activeDotButton = document.querySelector('.slider-section.second .carousel-dot');

function onDotButtonClick2(event: MouseEvent) {
    // const activeDotButton = document.querySelector('.slider-section.second .carousel-dot.active');
    const clickedDotButton: HTMLElement = event.target as HTMLElement;
    activeDotButton.classList.remove('active');
    clickedDotButton.classList.add('active');
    activeDotButton = clickedDotButton;

    const slideDots = document.querySelectorAll('.slider-section.second .carousel-dot');
    const carouselSlidesElem: HTMLElement = document.querySelector('.slider-section.second .carousel-slides')

    for (let i = 0; i < slideDots.length; i++) {
        if (clickedDotButton === slideDots[i]) {
            carouselSlidesElem.style.transform = `translateX(-${i * 100}%)`; //интерполяция строк
        }
    }
}

let currentSlide: number = 0;
let timerId: number = setInterval(doFade, 3500);

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