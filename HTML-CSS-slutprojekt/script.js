
const theme = document.querySelectorAll('.navbar-container__color-schemes--color-scheme');


//toggle menu
document.querySelector('.navicon')
.addEventListener('click', function(params){
    document.querySelector('header').classList.toggle('open');
});
//stäng sidomenyn vid klick på länk

document.querySelectorAll('ul > li')
.forEach(link => {
    link.addEventListener('click', function() {
        console.log(link);
        if(window.innerWidth<800) {
        document.querySelector('header').classList.toggle('open');
        }
    })
})


//byt färgtema på sidan, stäng meny om sidomeny
theme.forEach(button => {
    button.addEventListener('click', (e)=>{
         document.querySelector('body').className=button.classList[1];
         console.log(window.innerWidth);
         if(window.innerWidth<800) {
            document.querySelector('header').classList.toggle('open');
         }
    })
})

