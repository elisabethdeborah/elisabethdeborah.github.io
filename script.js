const nav = document.querySelector('nav');
const navicon = document.querySelector('.navicon')
const dropdown = document.querySelector('.dropdown')
const projects = document.querySelector('.navbar__listitem__my-projects-rubrik')

navicon.addEventListener('click', (event) => {
    nav.classList.toggle('synlig');
    if (nav.classList.contains('synlig')) {
        navicon.textContent = 'X'; 
    } else if (!(nav.classList.contains('synlig'))){
        navicon.textContent = '|||'; 
    }
})

projects.addEventListener('click', (event) => {
    projects.classList.toggle('open');
    dropdown.classList.toggle('visa-dropdown');
})

