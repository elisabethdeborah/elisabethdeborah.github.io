
//DENNA FIL ANVÄNDS ENDAST AV MY-TOMATOES-FLIK-FINAL-TOMAT.HTML

//ANIMATIONER
anime({
    targets: 'section#animera-logga-new',
        translateY: [
            {value:800, duration:700, delay:800, easing:'easeInOutSine'},
            {value:550, duration:850},
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
    targets: 'section#animera-h1-mytomatoes',
        translateY: [
            {value:67, delay:2000, duration:2000},
        ],
        skewY:[
            {value:-15, delay:10, easing:'easeInOutSine'},
            {value:0, easing:'easeInOutSine'},
        ],
});
        

const playPause= anime({
    targets: 'div.box',
    translateY: [
        {value:800, duration:800},
        {value: 1000, duration:2500}
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine'
    },
    delay: function(el, i,l){return i*1000}
});
        
anime({
    targets: 'section#animera-logga',
    translateY: [
        {value:600, duration:700, delay:800}
    ],
    skewX:[
        {value:30, duration:100, delay:1000,easing:'easeInOutSine'},
        {value:-25, delay:10, easing:'easeInOutSine'},
        {value:0, easing:'easeInOutSine'},
    ]
});
//SLUT ANIMATION


let background = document.querySelector('body');
let header=document.querySelector('header');
let navBar=document.querySelector('.navbar');
const tomatLista = document.querySelector('#tomato-list');
let timerText =document.querySelector('#timer-text');
let minutesText =document.querySelector('#minutes-text');
let secondsText =document.querySelector('#seconds-text');
const testStart =document.querySelector('#test-start');
const nedräkningstimer=document.querySelector('.nedräkningstimer');
const timerButtons=document.querySelector('.timer-buttons');
const inputTimer=document.querySelector('.input-timer');
const startKnapp=document.querySelector('#start-button');
const angivenStarttid=document.querySelector('.angiven-starttid-spara');
const tomatTimer=document.querySelector('.tomat-timer');
const tomatStart=document.querySelector('#tomat-start');
const öppnaLäggTill=document.querySelector('#länk-öppna-form-sök');
const tomatoForm=document.querySelector('#tomato-form');
const navbarList=document.querySelector('.nvbar-list');

const allaNedräkningsRutor = document.querySelectorAll('.nedräkningstimer>h2');
let hoursDisplay=document.querySelector('#time-left');
let minutesDisplay=document.querySelector('#minutes-left');
let secondsDisplay=document.querySelector('#seconds-left');

let animerah1=document.querySelector('#animera-h1-my-tomatoes')
const vitLogga=document.querySelector('#animera-logga-new-vit')
const rödLogga=document.querySelector('#animera-logga-new')
const restartKnapp=document.querySelector('#ned-restart')
const h1=document.querySelector('h1')
const tidSlutAnimation = document.querySelector('#logga-när-tid-slut');
const spanTomatoEs=document.querySelector('span.tomatoEs');
const loggan=document.querySelector('.tomaToDoLogga');
let volume=document.querySelector('#volym');

const nedräkningsStopp=document.querySelector('#ned-stopp');
const nedräkningsResume=document.querySelector('#ned-resume');

//MENY-TOGGLE
toggleMeny.addEventListener('click', (event)=> {
    navbarToggle.classList.toggle('navbar-view');
    navbarListToggle.classList.toggle('navbar-view');
})

//FUNKTIONER FÖR VARJE TOMAT I LISTAN
tomatLista.addEventListener('click', (e) => {

    //SÄTTA IGÅNG NEDRÄKNINGEN NÄR MAN KLICKAR PÅ TIMER-IKON ELLER GRÖN BAKGRUND PÅ TIMER-IKONEN
    if (e.target.classList.contains('startTimer')) {
        timmar=e.target.parentElement.parentElement.previousElementSibling.innerText[0]+e.target.parentElement.parentElement.previousElementSibling.innerText[1]
        minuter=e.target.parentElement.parentElement.previousElementSibling.innerText[3]+e.target.parentElement.parentElement.previousElementSibling.innerText[4]
        if (!isNaN(timmar), !isNaN(minuter)) {
            countDown(timmar, minuter);
        } else {
            console.log(!isNaN(timmar), !isNaN(minuter))
            e.target.style.cursor='default'
        }  
    } else if (e.target.classList.contains('btn-success')) {
        timmar=e.target.parentElement.previousElementSibling.innerText[0]+e.target.parentElement.previousElementSibling.innerText[1]
        minuter=e.target.parentElement.previousElementSibling.innerText[3]+e.target.parentElement.previousElementSibling.innerText[4]
        if (!isNaN(timmar), !isNaN(minuter)) {
            countDown(timmar, minuter);
        } else {
            console.log(!isNaN(timmar), !isNaN(minuter))
            e.target.innerHTML='<i class="fas fa-ban"></i>'
            e.target.style.cursor='default'
        }  
    }
    // TA BORT TOMAT FRÅN LISTA NÄR MAN KLICKAR PÅ DELETE-KLASS-KNAPP/ RÖD KNAPP/ RÖD BAKGRUND
    if (e.target.classList.contains('delete')) {
        // Remove Tomato from UIT
        UI.deleteTomato(e.target);
        // Show success message
        UI.showAlert('Tomato Removed', 'danger');
        // Remove tomato from store FÖRSÖKER NÅ TOMATENS NAMN, INTE INNEHÅLL
        Store.removeTomato(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent) 
    } else if (e.target.classList.contains('btn-danger')) {
        // Remove Tomato from UI
        UI.deleteTomato(e.target);
        // Show success message
        UI.showAlert('Tomato Removed', 'danger');
        // Remove tomato from store FÖRSÖKER NÅ TOMATENS NAMN, INTE INNEHÅLL
        Store.removeTomato(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
    }
    //KLICKA PÅ ATT-GÖRA-LISTA-KNAPPEN FÖR ATT SPARA I TODO-LISTA I LOCAL STORAGE // KLICKAR PÅ ATT-GÖRA-LISTA-FA-IKONEN   //KLICKAR PÅ RUTAN RUNT ATT-GÖRA-LISTA-FA-IKONEN
    if (e.target.classList.contains('fa-tasks')) {
        tomatos.forEach((tomato, index) => {
            let targetName = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText.toLowerCase();
            console.log(targetName);
            let tomatoName = tomatData.flat()[index].name.toLowerCase();
            if (tomatoName==targetName) {
                Store.addTodo(tomato)
                UI.showAlert('To-do Added', 'success')
            }
        })
    } else if (e.target.classList.contains('btn-info')) {
        tomatos.forEach((tomato, index)=>{
            let targetName = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText.toLowerCase();
            let tomatoName = tomatData.flat()[index].name.toLowerCase();        
            if (tomatoName==targetName) {
                Store.addTodo(tomato)
                UI.showAlert('To-do Added', 'success')
            }
        })
    }
});

//HÄMTA TOMAT-ARRAY FRÅN LOCAL STORAGE OCH SPARA I EN LISTA
let tomatData=[Store.getTomatos()];

//HÄMTAR TOMATER-ARRAY FRÅN LOCAL STORAGE       //LOCAL STORAGE FUNKTIONER DEKLARERAS I TOMAT.JS-FILEN. HÄMTAR JSON-DATA FRÅN LOCAL STORAGE OCH PARSE-AR/STRINGIFY-AR FÖR ANVÄNDNING I JS. // I TOMAT.JS DEKLARERAS CLASSERNA STORE, UI, TOMATO, TODO. EFTERSOM FUNKTIONERNA ÄR STATIC SÅ KAN DE ANVÄNDAS ÄVEN HÄR UTAN ATT FÖRST DEKLARERAS
let tomatos=Store.getTomatos();


//RING-FUNKTIONEN NÄR NEDRÄKNINGEN ÄR FÄRDIG
volume.addEventListener('click', (e)=>{
    volume.classList.toggle('ljud-på')
    if(volume.classList.contains('ljud-på')){
        volume.innerText='Volume on'
    } else{
        volume.innerText='Volume off'
    }
})
//SJÄLVA NEDRÄKNINGSFUNKTIONEN, SÄTTS IGÅNG AV ATT GRÖNA KNAPPEN I TABELLEN KLICKAS OCH ATT DET FINNS SIFFROR FÖR TIMMAR (param1) OCH MINUTER (param2) I SAMMA TOMAT-RAD. 
function countDown(timmar,minuter){ 
    tomatStart.classList.toggle('synlig');
 
    //KONVERTERAR PARAMETRAR TILL SEKUNDER FÖR ATT HA SAMMA ENHETER I NEDRÄKNINGEN
    //TIMMAR
    let hoursLeft=parseInt(timmar,10);
    //MINUTER
    let minutesLeft=parseInt(minuter,10);
    //TIMMAR OCH MINUTER OMVANDLADE TILL SEKUNDER
    let totalStartTid=hoursLeft*60*60+minutesLeft*60

    let interval1= setInterval(function(){    
        countDown.runnning=true;    
        //CURRENT TIME-NEDRÄKNING
        let currentTime=totalStartTid--;
        öppnaLäggTill.classList.add('osynlig');
        header.style.marginBottom='0';
        bakgrundsFärgNedräkning(currentTime, hoursLeft, minutesLeft);
        
        //Hur många hela timmar kvar:
        hoursDisplay.innerHTML=Math.floor(totalStartTid/60/60);
        if(hoursDisplay.innerHTML<10){
            hoursDisplay.innerHTML="0"+hoursDisplay.innerHTML
        }
        //Hur många hela minuter kvar:                   
        minutesDisplay.innerHTML=Math.floor(totalStartTid/60)%60;
        if(minutesDisplay.innerHTML<10){
            minutesDisplay.innerHTML="0"+minutesDisplay.innerHTML
        }
        //Hur många sekunder kvar utöver hela timmar och minuter:
        secondsDisplay.innerHTML=Math.floor(totalStartTid)%60;
        if(secondsDisplay.innerHTML<10){
            secondsDisplay.innerHTML="0"+secondsDisplay.innerHTML
        }
        if(hoursDisplay.innerHTML==NaN||isNaN(hoursDisplay.innerHTML)){
            console.log('isNaN')
        }
            //NÄR TIDEN ÄR UTE
            tidenUte(currentTime, interval1);
    },1000) 

    
    //KLICKA PÅ PAUSE-KNAPP FÖR ATT PAUSA NEDRÄKNINGEN
    nedräkningsStopp.addEventListener('click', (ev)=>{
        clearInterval(interval1);
        countDown.isRunning=false;
    })
        //KLICKA PÅ RESUME-KNAPP FÖR ATT FORTSÄTTA NEDRÄKNINGEN GENOM ATT KALLA PÅ COUNTDOWN-FUNKTIONEN MED PARAMETRARNA SOM FINNS I HTML:EN I NEDRÄKNINGSTIMERN
    nedräkningsResume.addEventListener('click', (ev)=>{
        clearInterval(interval1);
        countDown(hoursDisplay.innerHTML,minutesDisplay.innerHTML)
    })
} //SLUT COUNTDOWN-FUNKTIONEN

 
function tidenUte(currentTime, interval1) {
    if(currentTime<1){
        clearInterval(interval1);
        tidSlutAnimation.classList.add('tid-slut');
        timerButtons.classList.add('osynlig');
        if(volume.classList.contains('ljud-på')){
            startGame()
        }
        //ANIMATIONEN FÖR ALARM-RINGNING
        let timerRing=anime({
            targets: '.tomaToDoLogga',
            skewX:[
                {value:40, duration:100, delay:1000,easing:'easeInOutSine'},
                {value:-35, delay:10, easing:'easeInOutSine'},
                {value:0, easing:'easeInOutSine'},
            ],
            scale: [
                {value:2, duration:100, delay:1000,easing:'easeInOutSine'},
                {value:1, delay:10, easing:'easeInOutSine'},
                {value:2, duration:100, delay:10,easing:'easeInOutSine'},
                {value:1, delay:10, easing:'easeInOutSine'},
            ],
            rotate:{
                value: '1turn',
                easing: 'easeInOutSine'
            },
            loop:true
        });

        background.classList.add('steg-5')
        nedräkningstimer.innerHTML="<h1 class='times-up'>Time's up!</h1>";
        setTimeout(()=>nedräkningstimer.remove(), 3000);
                
        const buttonStop=document.createElement('button');
        buttonStop.innerHTML='<button id="bortKnapp" class="btn">Stop</button>';
        //LÄGGER TILL STOP-KNAPP VID ALARM
        tomatStart.appendChild(buttonStop);        
        //STÄNGA AV ALARMET
        stoppaAlarm(buttonStop, timerRing);
    } 
}
 
function stoppaAlarm(buttonStop, timerRing) {
    buttonStop.addEventListener('click',(ev)=>{ 
        timerRing.pause();
        //ANIMATION
        timerRing=anime({
            targets: 'section#animera-logga-new',
            scale: [
                {value:2, duration:100, delay:100,easing:'easeInOutSine'},
                {value:0, delay:10, easing:'easeInOutSine'},
            ],
            loop:false
        });
        if(startGame.isRunning){
            myMusic.stop()
        }
        setTimeout(()=>buttonStop.remove(), 1000);
        setTimeout(()=>location.reload(),2000);
    }) 
}

function bakgrundsFärgNedräkning(currentTime, hoursLeft, minutesLeft) {
    if(currentTime>(hoursLeft*60*60+minutesLeft*60)*0.875){
        background.classList.add('steg-1');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-1');
        });
    } else if (currentTime<=(hoursLeft*60*60+minutesLeft*60)*0.875&&currentTime>(hoursLeft*60*60+minutesLeft*60)*0.75){
        background.classList.add('steg-2');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-2');
        });
    } else if (currentTime<=(hoursLeft*60*60+minutesLeft*60)*0.75&&currentTime>(hoursLeft*60*60+minutesLeft*60)*0.625){
        background.classList.add('steg-3');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-3');
        });
    }else if (currentTime<=(hoursLeft*60*60+minutesLeft*60)*0.625&&currentTime>(hoursLeft*60*60+minutesLeft*60)*0.5){
        background.classList.add('steg-4');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-4');
        });
    }else if (currentTime<=(hoursLeft*60*60+minutesLeft*60)*0.5&&currentTime>(hoursLeft*60*60+minutesLeft*60)*0.375){
        background.classList.add('steg-5');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-5');
        });
    } else if (currentTime<=(hoursLeft*60*60+minutesLeft*60)*0.375&&currentTime>(hoursLeft*60*60+minutesLeft*60)*0.25){
        background.classList.add('steg-6');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-6');
        });
    } else if (currentTime<=(hoursLeft*60*60+minutesLeft*60)*0.25&&currentTime>(hoursLeft*60*60+minutesLeft*60)*0.125){
        background.classList.add('steg-7');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-7');
        });
    } else if (currentTime<=(hoursLeft*60*60+minutesLeft*60)*0.125&&currentTime>(hoursLeft*60*60+minutesLeft*60)*0.05){
        background.classList.add('steg-8');
     //   tomatStart.classList.add('steg-8');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-8');
        });
    } else{
        background.classList.add('steg-9');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-9');
        });
    }
}



//LADDAR OM HELA SIDAN NÄR MAN KLICKAR PÅ RESTART-KNAPPEN, NOLLSTÄLLER TIMER-FUNKTIONER
restartKnapp.addEventListener('click', (e)=>{
    setTimeout(()=>location.reload(),500);
})


//FUNKTION FÖR ALARM-RINGNING SOM ÅBEROPAS I COUNTDOWN-FUNKTIONEN NÄR TIDEN ÄR UTE / NEDRÄKNINGEN ÄR FÄRDIG
let myMusic;

function startGame() {
    myMusic = new sound("arcade_game_alarm_long.mp3");
    myMusic.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.loop=true;
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
}




