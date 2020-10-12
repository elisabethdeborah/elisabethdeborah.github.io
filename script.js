const nav = document.querySelector('nav');
const navicon = document.querySelector('.navicon')
const dropdown = document.querySelector('.dropdown')
const projects = document.querySelector('.navbar__listitem__my-projects-rubrik')
const screenshot = document.querySelectorAll('.project-cards-container__card__image')
const screenshotContainer = document.querySelector('.project-cards-container')
const figure = document.querySelectorAll('.project-cards-container__card')

navicon.addEventListener('click', (event) => {
    nav.classList.toggle('synlig');
    if (nav.classList.contains('synlig')) {
        navicon.textContent = 'X'; 
    } else if (!(nav.classList.contains('synlig'))){
        navicon.textContent = '|||'; 
    }
})

projects.addEventListener('mouseover', (event) => {
    projects.classList.add('open');
    dropdown.classList.add('visa-dropdown');
})

projects.addEventListener('mouseout', (event) => {
    projects.classList.remove('open');
    dropdown.classList.remove('visa-dropdown');
})

figure.forEach(figure => {
    figure.addEventListener('click', (event) => {
        if(window.innerWidth>600) {
            figure.classList.toggle('large-figure');
           /*  figure.forEach(figure => {
                figure.classList.toggle('large-figure');
            }) */
            screenshotContainer.classList.toggle('container-large');
            }
    })
})

