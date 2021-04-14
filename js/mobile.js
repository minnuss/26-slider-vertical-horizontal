const slideUp = document.querySelector('.slider__content__up-slide');
const slideDown = document.querySelector('.slider__content__down-slide')
const allSlidesDown = document.querySelectorAll('.slider__content__down-slide div')

slideUp.style.transform = `translateX(-${100 * (allSlidesDown.length - 1)}vw)`;

let clientWidth = document.documentElement.clientWidth;
// console.log(clientWidth)
slideUp.style.width = (allSlidesDown.length * clientWidth) + 'px';
slideDown.style.width = (allSlidesDown.length * clientWidth) + 'px';

let fullWidthSliderUp = (allSlidesDown.length - 1) * clientWidth;
let fullWidthSliderDown = 0;


const sliderContent = document.querySelector('.slider__content');
const btnUp = document.querySelector('.slider__content__buttons--upBtn');
const btnDown = document.querySelector('.slider__content__buttons--downBtn');
const allSlides = document.querySelectorAll('.slider__content__down-slide div')

let activeIdx = 0;

btnUp.addEventListener('click', () => changeSlide('up'));
btnDown.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
    if (direction === 'up') {
        if (fullWidthSliderUp < clientWidth && fullWidthSliderDown > allSlidesDown.length - 1 * clientWidth) {
            fullWidthSliderUp = (allSlidesDown.length - 1) * clientWidth;
            fullWidthSliderDown = 0;

            slideUp.style.transform = `translateX(-${100 * (allSlidesDown.length - 1)}vw)`;
            slideDown.style.transform = 'translateX(0)';
        } else {
            slideUp.style.transform = `translateX(-${fullWidthSliderUp -= clientWidth}px)`;
            slideDown.style.transform = `translateX(-${fullWidthSliderDown += clientWidth}px)`;

            let up = slideUp.style.transform;
            let down = slideDown.style.transform;
            console.log(up)
            console.log(down)

            console.log(fullWidthSliderUp)
            console.log(fullWidthSliderDown)
        }

    } else if (direction === 'down') {

        if (fullWidthSliderUp > allSlidesDown.length - 1 * clientWidth && fullWidthSliderDown < clientWidth) {

            fullWidthSliderUp = 0;
            fullWidthSliderDown = (allSlidesDown.length - 1) * clientWidth;

            slideUp.style.transform = 'translateX(0)';
            slideDown.style.transform = `translateX(-${100 * (allSlidesDown.length - 1)}vw)`;

        } else {
            slideUp.style.transform = `translateX(-${fullWidthSliderUp += clientWidth}px)`;
            slideDown.style.transform = `translateX(-${fullWidthSliderDown -= clientWidth}px)`;
        }

        console.log(fullWidthSliderUp)
        console.log(fullWidthSliderDown)
    }

}

console.log(fullWidthSliderUp)
console.log(fullWidthSliderDown)