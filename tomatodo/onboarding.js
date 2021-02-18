

const onBoarding = document.querySelector('.on-boarding');
let children = document.querySelectorAll('.on-boarding > *');
const closeOnBoardingButton = document.querySelector('.close-on-boarding');
const nextList = document.querySelectorAll('.onboarding-button-next');
const previousList = document.querySelectorAll('.onboarding-button-previous-top');
const previousBottomList = document.querySelectorAll('.previous-button-bottom');


nextList.forEach(button => {
    button.addEventListener('click', ()=>{
        let parentId = button.parentElement.parentElement.id;
        if (parentId<5) {
            button.parentElement.parentElement.classList.remove('visible');
            button.parentElement.parentElement.classList.add('to-the-left');
            nextSlide = `${Number(parentId)+1}`;
            let nextSlideElement = document.getElementById(nextSlide);
            nextSlideElement.classList.remove('to-the-right');
            nextSlideElement.classList.add('visible');
        };
    });
});


previousList.forEach(button => {
    button.addEventListener('click', ()=>{
        let parentId = button.parentElement.parentElement.id;
        if (parentId>1) {
            button.parentElement.parentElement.classList.remove('visible');
            button.parentElement.parentElement.classList.add('to-the-right');
            previousSlide = `${Number(parentId)-1}`;
            let previousSlideElement = document.getElementById(previousSlide);
            previousSlideElement.classList.remove('to-the-left');
            previousSlideElement.classList.add('visible');
        };
    });
});

previousBottomList.forEach(button => {
    button.addEventListener('click', ()=>{
        let parentId = button.parentElement.parentElement.id;
        if (parentId>1) {
            button.parentElement.parentElement.classList.remove('visible');
            button.parentElement.parentElement.classList.add('to-the-right');
            previousSlide = `${Number(parentId)-1}`;
            let previousSlideElement = document.getElementById(previousSlide);
            previousSlideElement.classList.remove('to-the-left');
            previousSlideElement.classList.add('visible');
        };
    });
});


closeOnBoardingButton.addEventListener('click', () => {
    onBoarding.classList.add('on-boarding-shrink');
    children.forEach(child => {
        if (child.classList.contains('visible')) {
        child.classList.remove('visible');
        };
        child.classList.add('hide');
        });
    setTimeout(() => {
        onBoarding.classList.add('hide');
    }, 500);
});

