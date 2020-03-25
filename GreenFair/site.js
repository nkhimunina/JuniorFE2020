function onDotButtonClick(event) {
    const activeDotButton = document.querySelector('.slider-section.first .carousel-dot.active');
    const clickedDotButton = event.target;
    activeDotButton.classList.remove('active');
    clickedDotButton.classList.add('active');
    // console.log(event);

    const activeSlide = document.querySelector('.slider-section.first .carousel-slide.active');
    activeSlide.classList.remove('active');

    const slideDots = document.querySelectorAll('.slider-section.first .carousel-dot');
    const slides = document.querySelectorAll('.slider-section.first .carousel-slide');

    for (let i = 0; i < slideDots.length; i++) {
        if (clickedDotButton === slideDots[i]) {
            slides[i].classList.add('active');
        }
    }
}

let activeDotButton = document.querySelector('.slider-section.second .carousel-dot');

function onDotButtonClick2(event) {
    // const activeDotButton = document.querySelector('.slider-section.second .carousel-dot.active');
    const clickedDotButton = event.target;
    activeDotButton.classList.remove('active');
    clickedDotButton.classList.add('active');
    activeDotButton = clickedDotButton;

    const slideDots = document.querySelectorAll('.slider-section.second .carousel-dot');
    const carouselSlidesElem = document.querySelector('.slider-section.second .carousel-slides')

    for (let i = 0; i < slideDots.length; i++) {
        if (clickedDotButton === slideDots[i]) {
            carouselSlidesElem.style.transform = `translateX(-${i * 100}%)`; //интерполяция строк
        }
    }
}