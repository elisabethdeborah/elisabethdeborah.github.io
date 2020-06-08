
anime({
    targets: 'section#animera-logga-new',
    translateY: [
        {value:800, duration:700, delay:800, easing:'easeInOutSine'},
        {value:650, duration:850},
    ],
    translateX: [
        {value:'100%', duration:1000, delay:800, easing:'easeInOutSine'}
    ],
    skewX:[
        {value:30, duration:100, delay:1000,easing:'easeInOutSine'},
        {value:-25, delay:10, easing:'easeInOutSine'},
        {value:0, easing:'easeInOutSine'},
    ],
    scale:[
        {value: 1.3, duration: 500, delay:1500,easing:'easeOutSine'}
    ],
    rotate:{
        value: '2turn', delay:1100,
        easing: 'easeInOutSine'
    }
});

anime({
    targets: 'section#animera-h1-todolist',
    translateY: [
        {value:760, duration:600, delay:800, easing:'easeInOutSine'},
        {value:650, duration:850},
    ],
})

const toggleMeny=document.querySelector('.fa-bars')
const navbarToggle=document.querySelector('#nvbar-toggle')
const navbarListToggle=document.querySelector('#nvbar-list-toggle')

toggleMeny.addEventListener('click', (e)=>{
    navbarToggle.classList.toggle('navbar-view');
    navbarListToggle.classList.toggle('navbar-view')
})

