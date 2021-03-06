
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
    targets: 'svg.hero__svg',
    translateY: [
      /*   {value:0, duration:500, delay:100}, */
        {value:-600, duration:500, delay:0},
        {value:100, duration:800, delay:800}
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
const headerTop = document.querySelector('.header__top');
let navBar=document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const timeBarContainer = document.querySelector('.time-bar-container');
const timeBar = document.querySelector('.time-bar-article');
//const tomatLista = document.querySelector('#tomato-list');
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
// const tomatoForm=document.querySelector('#tomato-form');
const öppnaAddNewTomato=document.querySelector('#visa-add-tomato');
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
const tidSlutAnimation = document.querySelector('.hero__svg');
const spanTomatoEs=document.querySelector('span.tomatoEs');
const loggan=document.querySelector('.tomaToDoLogga');
let volume=document.querySelector('#volym');

const nedräkningsStopp=document.querySelector('#ned-stopp');
const nedräkningsResume=document.querySelector('#ned-resume');
const tomater = document.querySelector('.tomater');

const inputTidTimmar = document.querySelector('#fyll-i-tid1');
const inputTidMinuter = document.querySelector('#fyll-i-tid2');
const main = document.querySelector('main');


//RING-FUNKTIONEN NÄR NEDRÄKNINGEN ÄR FÄRDIG
volume.addEventListener('click', (e)=>{
    volume.classList.toggle('ljud-på')
    if(volume.classList.contains('ljud-på')){
        volume.innerHTML='<img class="volume" src="/tomatodo/IMG/volume-on-vit.svg">'
    } else{
        volume.innerHTML='<img class="volume" src="/tomatodo/IMG/volume-off-vit.svg">'
    }
})

if (testStart) {
    testStart.addEventListener('click', (event) => {
    if (Number(inputTidTimmar.value)+Number(inputTidMinuter.value)!=0){
        console.log(Number(inputTidTimmar.value),Number(inputTidMinuter.value))
    countDown(Number(inputTidTimmar.value),Number(inputTidMinuter.value))
    } else {
        console.log(Number(inputTidTimmar.value),Number(inputTidMinuter.value))
        UI.showAlert(event.target.parentNode, event.target, 'No time added', 'red');
    }
})
}



//SJÄLVA NEDRÄKNINGSFUNKTIONEN, SÄTTS IGÅNG AV ATT GRÖNA KNAPPEN I TABELLEN KLICKAS OCH ATT DET FINNS SIFFROR FÖR TIMMAR (param1) OCH MINUTER (param2) I SAMMA TOMAT-RAD. 
function countDown(timmar,minuter){ 
    tomatStart.classList.toggle('synlig');
    timeBarContainer.classList.add('synlig');
    headerTop.style.backgroundColor="rgba(0,0,0,0)"
    if(window.innerWidth<650) {
        console.log(window.innerWidth)
        hero.style.paddingTop='150px';
     } else {
        console.log(window.innerWidth)
        hero.style.paddingTop='50px';
     }
    

   
    //KONVERTERAR PARAMETRAR TILL SEKUNDER FÖR ATT HA SAMMA ENHETER I NEDRÄKNINGEN
    //TIMMAR
    let hoursLeft=parseInt(timmar,10);
    //MINUTER
    let minutesLeft=parseFloat(minuter,10);
    //TIMMAR OCH MINUTER OMVANDLADE TILL SEKUNDER
    let totalStartTid=hoursLeft*60*60+minutesLeft*60
    

    let interval1= setInterval(function(){    
        countDown.runnning=true;
        
        

        //CURRENT TIME-NEDRÄKNING
        let currentTime=totalStartTid--;
        if (öppnaLäggTill){
        öppnaLäggTill.classList.add('osynlig');
        }
        if (inputTimer) {
            inputTimer.classList.add('osynlig');
        }
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
        tomatStart.classList.toggle('synlig');
        clearInterval(interval1);
        // STARTA COUNTDOWN PÅ SAMMA SEKUND SOM STOPPAT      
        let sekunder=secondsDisplay.innerHTML/60
        console.log(Number(minutesDisplay.innerHTML)+Number(sekunder))
        let minuter = Number(minutesDisplay.innerHTML)+Number(sekunder);
        countDown(hoursDisplay.innerHTML,minuter)
    })
   

} //SLUT COUNTDOWN-FUNKTIONEN



if(tomatoForm) {
    visaAddTomat.addEventListener('klick', (e) => {
        tomatoForm.classList.toggle('osynlig');
    })
}

function tidenUte(currentTime, interval1) {
    if(currentTime<1){
        clearInterval(interval1);
        tidSlutAnimation.classList.add('tid-slut');
        timerButtons.classList.add('osynlig');
        tomatStart.classList.remove('synlig');
        tomatStart.classList.add('osynlig');
        headerTop.style.backgroundColor="initial"
        timeBarContainer.classList.remove('.synlig')
        timeBarContainer.classList.add('.osynlig')
        if(volume.classList.contains('ljud-på')){
            startGame()
        }
        //ANIMATIONEN FÖR ALARM-RINGNING
        /* let timerRing=anime(
            {
            targets: 'path.gradient-bg',
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
            rotate:[
            {   value: '1turn',
                easing: 'easeInOutSine'}
            ],
            loop:true
            }
        ); */
        let timerRing=anime({
            targets: '.hero__svg path',
            fill: 'rgb(19,28,140)', // -> from '28px' to '100%',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 500,
            loop: true
          });
        
          let timerRingKropp=anime({
            targets: '.hero__svg stop',
            stopColor: 'rgb(255, 230, 0)', 
            offset: "40%",
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 500,
            loop: true,
            delay: 100
          });

          let timerRingBakgrund=anime({
            targets: 'body',
            fill: 'rgb(#ffffff)', // -> from '28px' to '100%',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 500,
            loop: true
          });
        


        body.classList.add('times-up-bakgrund')
        hero.classList.add('times-up-bakgrund')
        nedräkningstimer.innerHTML="<h1 class='times-up'>Time's up!</h1>";
        setTimeout(()=>nedräkningstimer.remove(), 3000);
                
        const buttonStop=document.createElement('article');
        buttonStop.innerHTML='<button id="bortKnapp" class="knapp knapp-stor knapp-3">Stop</button>';
        //LÄGGER TILL STOP-KNAPP VID ALARM
        main.insertBefore(buttonStop, timeBarContainer);        
        //STÄNGA AV ALARMET
        stoppaAlarm(buttonStop, timerRing, timerRingKropp, timerRingBakgrund);
    } 
}
 
function stoppaAlarm(buttonStop, timerRing, timerRingKropp, timerRingBakgrund) {
    buttonStop.addEventListener('click',(ev)=>{ 
        timerRing.pause();
        timerRingKropp.pause();
        timerRingBakgrund.pause();
        //ANIMATION
        timerRing=anime({
            targets: '.hero__svg path',
            scale: [
                {value:2, duration:100, delay:100,easing:'easeInOutSine'},
                {value:0, delay:10, easing:'easeInOutSine'},
            ],
            loop:false
        });

        timerRingKropp=anime({
            targets: '.hero__svg stop',
            scale: [
                {value:2, duration:100, delay:100,easing:'easeInOutSine'},
                {value:0, delay:10, easing:'easeInOutSine'},
            ],
            loop:false
        });
        
        if(startGame.isRunning){
            myMusic.stop()
        }
        setTimeout(() => {
            timeBarContainer.classList.add('fade-out')
        }, 100);
        setTimeout(()=>buttonStop.remove(), 1000);
        setTimeout(()=>location.reload(),2000);
    }) 
}

function bakgrundsFärgNedräkning(currentTime, hoursLeft, minutesLeft) {

    if(currentTime>(hoursLeft*60*60+minutesLeft*60)*0.9){
        
        hero.classList.add('steg-1');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-1');
        });
        timeBar.classList.add('bar-steg-1');
    } else if (currentTime>(hoursLeft*60*60+minutesLeft*60)*0.8){
        hero.classList.add('steg-2');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-2');
        });
        timeBar.classList.add('bar-steg-2');
    } else if (currentTime>(hoursLeft*60*60+minutesLeft*60)*0.7){
        hero.classList.add('steg-3');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-3');
        });
        timeBar.classList.add('bar-steg-3');
    }else if (currentTime>(hoursLeft*60*60+minutesLeft*60)*0.6){
        hero.classList.add('steg-4');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-4');
        });
        timeBar.classList.add('bar-steg-4');
    }else if (currentTime>(hoursLeft*60*60+minutesLeft*60)*0.5){
        hero.classList.add('steg-5');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-5');
        });
        timeBar.classList.add('bar-steg-5');
    } else if (currentTime>(hoursLeft*60*60+minutesLeft*60)*0.4){
        hero.classList.add('steg-6');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-6');
        });
        timeBar.classList.add('bar-steg-6');
    } else if (currentTime>(hoursLeft*60*60+minutesLeft*60)*0.3){
        hero.classList.add('steg-7');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-7');
        });
        timeBar.classList.add('bar-steg-7');
    } else if (currentTime>(hoursLeft*60*60+minutesLeft*60)*0.2){
        hero.classList.add('steg-8');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-8');
        });
        timeBar.classList.add('bar-steg-8');
    } else if (currentTime>(hoursLeft*60*60+minutesLeft*60)*0.1){
        hero.classList.add('steg-9');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-9');
        });
        timeBar.classList.add('bar-steg-9');
    }   else if  (currentTime>(hoursLeft*60*60+minutesLeft*60)*0.09) {
        timeBar.classList.add('bar-steg-10');
    } else{
        hero.classList.add('steg-10');
        allaNedräkningsRutor.forEach(ruta => {
            ruta.classList.add('steg-10');
        });
    }
}



//LADDAR OM HELA SIDAN NÄR MAN KLICKAR PÅ RESTART-KNAPPEN, NOLLSTÄLLER TIMER-FUNKTIONER
restartKnapp.addEventListener('click', (e)=>{
    setTimeout(()=>location.reload(),500);
})


//FUNKTION FÖR ALARM-RINGNING SOM KALLAS I COUNTDOWN-FUNKTIONEN NÄR TIDEN ÄR UTE / NEDRÄKNINGEN ÄR FÄRDIG
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



//ANVÄNDA DETTA NÅNSTANS? ÄNDRAR CSS MED JS-LOOP-ITERATIONS INDEX

/**
 * 
displayFelBokstäver = () => {
    //FÖR VARJE FEL BOKSTAV BLIR EN DEL AV SVG:N SYNLIG
    for (bokstav of felBokstäver) {
        svgHelaBilden.forEach((del, index) => {
            if (index == felBokstäver.indexOf(bokstav)){          
                del.classList.add('synlig')   
                hangmanBackground.style.backgroundColor='rgba(147, 75, 107, 0.'+antalFel*2+')';
                hangmanBackground.style.borderRadius=''+antalFel*2.5+'0%';
                hangmanBackground.style.padding=''+antalFel+'rem, 0,'+antalFel+'rem';
                antalFel=index;                   
            } 
        })                                                      
    //OM ANTAL FEL ÄR 5 SÅ ÄR HELA SVG:N SYNLIG OCH GUBBEN ÄR HÄNGD => GAME OVER 
        if(antalFel==5) {
            //UPPDATERAR RÄKNAREN FÖR ANTAL SPELOMGÅNGAR
            antalspelOmgångar++;    
            poängräknare.innerHTML=`Poäng: ${poängräknareCount} / ${antalspelOmgångar}`
            //ÄNDRAR BAKGRUNDSFÄRG OCH LÄGGER TILL TEXTEN "GAME OVER!" NÄR GUBBEN ÄR HÄNGD
           setTimeout(() => {
            felGissadeBokstäverSynas.classList.add('game-over')
           }, 1000);

            //NOLLSTÄLLER SPELPLANEN FÖR NÄSTA OMGÅNG
            nollställOmgång();
            animering();
        }
    }
    
}
 */