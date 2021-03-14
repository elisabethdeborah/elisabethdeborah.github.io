const nav = document.querySelector('nav');
const navicon = document.querySelector('.navicon');
const dropdown = document.querySelector('.dropdown');
const projects = document.querySelector('.navbar__listitem__my-projects-rubrik');
const screenshot = document.querySelectorAll('.project-cards-container__card__image');
const screenshotContainer = document.querySelector('.project-cards-container');
const figure = document.querySelectorAll('.project-cards-container__card');
const figureList = document.querySelectorAll('.project-cards-container__card3__caption ul')

const findOutMore = document.querySelector('.about-me-read-more');
const aboutMeHidden = document.querySelector('.about-me-hidden');

navicon.addEventListener('click', (event) => {
    nav.classList.toggle('synlig');
    if (nav.classList.contains('synlig')) {
        navicon.textContent = 'X'; 
    } else if (!(nav.classList.contains('synlig'))){
        navicon.textContent = '|||'; 
    }
});



figure.forEach(figure => {
    figure.addEventListener('click', (event) => {
        if(window.innerWidth>600) {
            figure.classList.toggle('large-figure');
            figure.children[1].children[1].classList.toggle('large-figure-ul');
            screenshotContainer.classList.toggle('container-large');
            }
    })
})

