const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let acitveSlide = 0;

rightBtn.addEventListener('click', () => {
    acitveSlide++;

    if(acitveSlide > slides.length - 1){
        acitveSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
})

leftBtn.addEventListener('click', () => {
    acitveSlide--;

    if(acitveSlide < 0){
        acitveSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
})

setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[acitveSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[acitveSlide].classList.add('active');
}