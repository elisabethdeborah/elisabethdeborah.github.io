


anime({
    targets: 'section#animera-logga',
    translateY: [
        {value:800, duration:700, delay:800}
    ],
    skewX:[
        {value:30, duration:100, delay:1000,easing:'easeInOutSine'},
        {value:-25, delay:10, easing:'easeInOutSine'},
        {value:0, easing:'easeInOutSine'},
    ],
    scale:[
        {value:1.3, duration: 500, delay:1100,easing:'easeOutSine'}
    ]
});

anime({
    targets: 'section#animera-h1-quickstart',
    translateY: [
        {value:650, duration:1200, delay:1000}
    ],
    skewX:[
        {value:30, duration:100, delay:1000,easing:'easeInOutSine'},
        {value:-25, delay:10, easing:'easeInOutSine'},
        {value:0, easing:'easeInOutSine'},
    ]
});


const toggleMeny=document.querySelector('.fa-bars')
const navbarToggle=document.querySelector('#nvbar-toggle')
//const navbarList=document.querySelector('.nvbar-list')
const navbarListToggle=document.querySelector('#nvbar-list-toggle')

//const restartKnapp=document.querySelector('#ned-restart')
 

toggleMeny.addEventListener('click', (e)=>{
    navbarToggle.classList.toggle('navbar-view');
    navbarListToggle.classList.toggle('navbar-view')
})

restartKnapp.addEventListener('click', (e)=>{
    setTimeout(()=>location.reload(),500);
    console.log('restart')
})
