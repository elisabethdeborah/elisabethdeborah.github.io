const nav = document.querySelector('nav');
const navicon = document.querySelector('.navicon')
const dropdown = document.querySelector('.dropdown')
const projects = document.querySelector('.navbar__listitem__my-projects-rubrik')
const screenshot = document.querySelectorAll('.project-cards-container__card')
const screenshotContainer = document.querySelector('.project-cards-container')

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

screenshot.forEach(kort => {
    kort.addEventListener('click', (event) => {
        if(window.innerWidth>600) {
        kort.classList.toggle('large');
        screenshotContainer.classList.toggle('container-large');
         }
    })
})

