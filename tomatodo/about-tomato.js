
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
const body = document.querySelector('body');
const header = document.querySelector('header');
const navicon = document.querySelector('.navicon');
const colorScheme = document.querySelectorAll('.navbar-container__color-schemes--color-scheme');

navicon.addEventListener('click', (event) => {
    console.log('funkar');
    header.classList.toggle('open');
})

colorScheme.forEach((knapp) => {
    this.addEventListener('click', (e)=> {
        body.classList.toggle(e.target.classList[1]);
    })
})
