const sliderContent = document.querySelector('.slider__content');
let slideLeft = document.querySelector('.slider__content__left-slide');
let slideRight = document.querySelector('.slider__content__right-slide');
const btnUp = document.querySelector('.slider__content__buttons--upBtn');
const btnDown = document.querySelector('.slider__content__buttons--downBtn');
const allSlides = document.querySelectorAll('.slider__content__right-slide div')

let activeIdx = 0;

slideLeft.style.top = `-${(allSlides.length - 1) * 100}vh`;

btnUp.addEventListener('click', () => changeSlide('up'));
btnDown.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {

    let clientHeight = sliderContent.clientHeight;
    console.log(clientHeight)
    if (direction === 'up') {
        activeIdx++;
        if (activeIdx > allSlides.length - 1) {
            activeIdx = 0;
        }
    } else if (direction === 'down') {
        activeIdx--;
        if (activeIdx < 0) {
            activeIdx = allSlides.length - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeIdx * clientHeight}px)`;
    slideLeft.style.transform = `translateY(${activeIdx * clientHeight}px)`;

    // console.log(`translateY(-${activeIdx * clientHeight}px)`)

}




