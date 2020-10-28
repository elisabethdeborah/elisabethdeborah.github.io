
const navicon = document.querySelector('.navicon');
navicon.addEventListener('click', (event) => {
    console.log('funkar');
    header.classList.toggle('open');
})

const tomatoForm=document.querySelector('#tomato-form');