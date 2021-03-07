const nav = document.querySelector('nav');
const navicon = document.querySelector('.navicon');
const dropdown = document.querySelector('.dropdown');
const projects = document.querySelector('.navbar__listitem__my-projects-rubrik');
const screenshot = document.querySelectorAll('.project-cards-container__card__image');
const screenshotContainer = document.querySelector('.project-cards-container');
const figure = document.querySelectorAll('.project-cards-container__card');

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
/* 
findOutMore.addEventListener('click', (event) => {
    if (aboutMeHidden.classList.contains('view')) {
        aboutMeHidden.classList.remove('view-hide');
    setTimeout(() => {
        aboutMeHidden.classList.remove('view'); 
    }, 1000);
    } else if (!(nav.classList.contains('view'))){
        aboutMeHidden.classList.add('view-open');
    setTimeout(() => {
        aboutMeHidden.classList.add('view'); 
    }, 1000); 
    }
    
}); */


figure.forEach(figure => {
    figure.addEventListener('click', (event) => {
        if(window.innerWidth>600) {
            figure.classList.toggle('large-figure');
            screenshotContainer.classList.toggle('container-large');
            }
    })
})

