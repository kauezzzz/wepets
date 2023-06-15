// Função 1

let sliderContainer = document.querySelector('.slider-container');
let sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;

function slide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = sliderItems.length - 1;
    } else if (currentIndex >= sliderItems.length) {
        currentIndex = 0;
    }

    let itemWidth = sliderItems[0].offsetWidth;
    sliderContainer.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

// Função 2

let sliderContainer2 = document.querySelector('.slider-container2');
let sliderItems2 = document.querySelectorAll('.slider-item2');
let currentIndex2 = 0;

function slide2(direction2) {
    currentIndex2 += direction2;

    if (currentIndex2 < 0) {
        currentIndex2 = sliderItems2.length - 1;
    } else if (currentIndex2 >= sliderItems2.length) {
        currentIndex2 = 0;
    }

    let itemWidth2 = sliderItems2[0].offsetWidth;
    sliderContainer2.style.transform = `translateX(${-currentIndex2 * itemWidth2}px)`;
}