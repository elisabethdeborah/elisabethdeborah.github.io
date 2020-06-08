


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

////////////////////

let background = document.querySelector('body');
let header=document.querySelector('header');
let navBar=document.querySelector('.navbar');
let tidInput1 = document.querySelector('#fyll-i-tid1').value;
let tidInput2 = document.querySelector('#fyll-i-tid2').value;
let timerText =document.querySelector('#timer-text');
let minutesText =document.querySelector('#minutes-text');
let secondsText =document.querySelector('#seconds-text');
const testStart =document.querySelector('#test-start');
const nedräkningstimer=document.querySelector('.nedräkningstimer');
const inputTimer=document.querySelector('.input-timer');
const startKnapp=document.querySelector('#start-button');
const pauseBtn=document.querySelector('#pause-button');
const resumeBtn=document.querySelector('#resume-button')
const fromTheTopBtn=document.querySelector('#from-the-top-button');
const resetBtn=document.querySelector('#reset-button');
const angivenStarttid=document.querySelector('.angiven-starttid-spara');
const tomatTimer=document.querySelector('.tomat-timer');
const loggan=document.querySelector('.tomaToDoLogga')
const nedräkningsStopp=document.querySelector('#ned-stopp');
const nedräkningsResume=document.querySelector('#ned-resume');
const tomatStart=document.querySelector('#tomat-start')
const toggleMeny=document.querySelector('.fa-bars')
const navbarToggle=document.querySelector('#nvbar-toggle')
const navbarList=document.querySelector('.nvbar-list')
const navbarListToggle=document.querySelector('#nvbar-list-toggle')

const restartKnapp=document.querySelector('#ned-restart')


toggleMeny.addEventListener('click', (e)=>{
    navbarToggle.classList.toggle('navbar-view');
    navbarListToggle.classList.toggle('navbar-view')
})

restartKnapp.addEventListener('click', (e)=>{
    setTimeout(()=>location.reload(),500);
    console.log('restart')
})

class UI{
    static showAlert(message, className){
        const div=document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container=document.querySelector('.timer-contain');
        const form=document.querySelector('.input-timer');
        container.insertBefore(div, form);
        //Vanish in 3 seconds
        setTimeout(()=>document.querySelector('.alert').remove(), 3000);
    }
}


testStart.addEventListener('click', function(ev){
    /* startKnapp.style.display='initial'
    startKnapp.style.transitionDuration='250ms'; */
    angivenStarttid.style.display='none'
    angivenStarttid.style.transitionDuration='250ms';
    testStart.style.display='none';
    testStart.style.transitionDuration='250ms';
    let tidInput1 = document.querySelector('#fyll-i-tid1').value;
    let tidInput2 = document.querySelector('#fyll-i-tid2').value;
    if(tidInput1[0]>2&&tidInput1[1]!=undefined){
        UI.showAlert('Max time is 24 h', 'danger')
    } else if(tidInput1[0]>1&&tidInput1[1]>4){
        UI.showAlert('Max time is 24 h', 'danger')
    } else if(tidInput2[0]>5&&tidInput2[1]!=undefined){
        UI.showAlert('Max time is 59 minutes', 'danger')
    } else if(tidInput1[1]==undefined){
        UI.showAlert('Put in 2 numbers please', 'danger')
    } else if(tidInput2[1]==undefined){
        UI.showAlert('Put in 2 numbers please', 'danger')
    }else{ 
    timerText.textContent=`${tidInput1}`;
    minutesText.textContent=`${tidInput2}`;
    secondsText.textContent=`00`;
    timeLeftX=tidInput1
    minutesLeftX=tidInput2
    countDown(timeLeftX,minutesLeftX)
    }
})


//////////////////////////////////////////////////
let timeLeftDisplay=document.querySelector('#time-left')
let minutesLeftDisplay=document.querySelector('#minutes-left')
let secondsLeftDisplay=document.querySelector('#seconds-left')
const timerButtons=document.querySelector('.timer-buttons')
let secondsLeft=secondsLeftDisplay.innerHTML=parseInt(secondsText.innerHTML,10)
const startBtn=document.querySelector('#start-button')

function countDown(timeLeftX,minutesLeftX){
    nedräkningstimer.style.display='flex';
    nedräkningstimer.style.transitionDuration='250ms';
    timerButtons.style.display='flex';
    timerButtons.style.transitionDuration='250ms';
    angivenStarttid.style.display='none';
    angivenStarttid.style.transitionDuration='250ms';
    /* startBtn.style.display='none';
    startBtn.style.transitionDuration='250ms'; */
    inputTimer.style.display='none';
    inputTimer.style.transitionDuration='250ms';
    //TIMMAR
    let timeLeft=parseInt(timeLeftX,10);
    //MINUTER
    let minutesLeft=parseInt(minutesLeftX,10)
    //SEKUNDER
   let secondsLeft=secondsLeftDisplay.innerHTML=parseInt(secondsText.innerHTML,10);
    //////*/
    let timeLeft3=timeLeft*60*60+minutesLeft*60

    
    let interval1=  setInterval(function(){           
        //TIDUTRÄKNING AV INPUT1, DVS HELA TIMMAR
        let currentTime=timeLeft3--;

        tomatStart.style.minHeight='350px'
        header.style.marginBottom='0'
        if(currentTime>(timeLeft*60*60+minutesLeft*60)*0.875){
            background.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(50,205,50,0.86) 14%, rgba(246,246,246,0) 100%)';
            tomatStart.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(50,205,50,0.86) 14%, rgba(246,246,246,0) 100%)';
            background.style.transitionDuration='300ms';
            timeLeftDisplay.style.color='#686868';
            minutesLeftDisplay.style.color='#686868';
            secondsLeftDisplay.style.color='#686868';
        } else if (currentTime<=(timeLeft*60*60+minutesLeft*60)*0.875&&currentTime>(timeLeft*60*60+minutesLeft*60)*0.75){
            background.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(173,255,47,0.86) 14%, rgba(173,255,47,0) 100%)';
            tomatStart.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(173,255,47,0.86) 14%, rgba(173,255,47,0) 100%)';
            background.style.transitionDuration='300ms';
        } else if (currentTime<=(timeLeft*60*60+minutesLeft*60)*0.75&&currentTime>(timeLeft*60*60+minutesLeft*60)*0.625){

            background.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(210,255,50,0.86) 14%, rgba(50,205,50,0) 100%)';
            tomatStart.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(210,255,50,0.86) 14%, rgba(50,205,50,0) 100%)';
            background.style.transitionDuration='300ms';
        }else if (currentTime<=(timeLeft*60*60+minutesLeft*60)*0.625&&currentTime>(timeLeft*60*60+minutesLeft*60)*0.5){
            background.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,0,0.86) 14%, rgba(255,255,0,0) 100%)';
            tomatStart.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,0,0.86) 14%, rgba(255,255,0,0) 100%)';
            background.style.transitionDuration='300ms';
        }else if (currentTime<=(timeLeft*60*60+minutesLeft*60)*0.5&&currentTime>(timeLeft*60*60+minutesLeft*60)*0.375){
            background.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,217,0,0.86) 14%, rgba(255,217,0,0) 100%)';
            tomatStart.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,217,0,0.86) 14%, rgba(255,217,0,0) 100%)';
            background.style.transitionDuration='300ms';
        } else if (currentTime<=(timeLeft*60*60+minutesLeft*60)*0.375&&currentTime>(timeLeft*60*60+minutesLeft*60)*0.25){
            background.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,165,0,0.86) 14%, rgba(255,165,0,0) 100%)';
            tomatStart.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,165,0,0.86) 14%, rgba(255,165,0,0) 100%)';
            background.style.transitionDuration='300ms';
        } else if (currentTime<=(timeLeft*60*60+minutesLeft*60)*0.25&&currentTime>(timeLeft*60*60+minutesLeft*60)*0.125){
            background.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,140,0,0.86) 14%, rgba(255,140,0,0) 100%)';
            tomatStart.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,140,0,0.86) 14%, rgba(255,140,0,0) 100%)';
            background.style.transitionDuration='300ms';
        } else if (currentTime<=(timeLeft*60*60+minutesLeft*60)*0.125&&currentTime>(timeLeft*60*60+minutesLeft*60)*0.05){
            background.style.background='linear-gradient(to bottom, rgba(255,100,0,1) 0%, rgba(255,100,0,1) 45%, rgba(246,246,246,1) 94%, rgba(255,255,255,1) 100%)';
            tomatStart.style.background='linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,140,0,0.86) 14%, rgba(255,140,0,0) 100%)';
            background.style.transitionDuration='300ms';
        } else{
            background.style.background='linear-gradient(to bottom, rgba(255,35,10,1) 0%, rgba(255,35,10,1) 6%, rgba(254,32,16,1) 25%, rgba(255,30,5,1) 35%, rgba(255,69,41,1) 51%, rgba(255,97,77,1) 74%, rgba(255,97,77,1) 91%, rgba(255,97,77,1) 100%)';
            background.style.transitionDuration='300ms';
        }
 
        //Hur många hela timmar kvar:
        timeLeftDisplay.innerHTML=Math.floor(timeLeft3/60/60);
        if(timeLeftDisplay.innerHTML<10){
            timeLeftDisplay.innerHTML="0"+timeLeftDisplay.innerHTML
        }
        //Hur många hela minuter kvar: //  minutesLeftDisplay.innerHTML=Math.floor(timeLeft/60);
        //Antal minuter kvar utöver hela timmar://  minutesLeftDisplay.innerHTML=Math.floor(timeLeft3/60);                        
        minutesLeftDisplay.innerHTML=Math.floor(timeLeft3/60)%60;
        if(minutesLeftDisplay.innerHTML<10){
            minutesLeftDisplay.innerHTML="0"+minutesLeftDisplay.innerHTML
        }
        //Hur många hela sekunder kvar://  secondsLeftDisplay.innerHTML=Math.floor(timeLeft);                        
        //Hur många sekunder kvar utöver hela timmar och minuter:
        secondsLeftDisplay.innerHTML=Math.floor(timeLeft3)%60;
        if(secondsLeftDisplay.innerHTML<10){
            secondsLeftDisplay.innerHTML="0"+secondsLeftDisplay.innerHTML
        }
                
        let myMusic;
        let volumeMute=document.querySelector('#ljud-av');               

        volumeMute.addEventListener('click', (e)=>{
            volumeMute.classList.toggle('tyst')
            if(volumeMute.classList.contains('tyst')){
                volumeMute.innerText='Volume on'
            }else{
                volumeMute.innerText='Volume off'
            }
        })

        if(currentTime<1){
            clearInterval(interval1);
            loggan.style.background="radial-gradient(ellipse at center, rgba(255,222,10,1) 0%, rgba(255,211,13,1) 3%, rgba(255,10,59,0.13) 57%, rgba(255,10,59,0) 65%)";
            loggan.style.padding="10px";
            timerButtons.style.display='none';
 
            if(volumeMute.classList.contains('tyst')){
                startGame()
            }
            let timerRing=anime({
                targets: 'section#animera-logga',
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

            background.style.backgroundColor='yellow';
            background.style.background='linear-gradient(to bottom, rgba(255,10,59,0.87) 0%, rgba(255,10,59,0.89) 13%, rgba(255,200,15,1) 91%, rgba(255,222,10,1) 100%)'
            nedräkningstimer.innerHTML="<h1 class='times-up'>Time's up!</h1>";
            setTimeout(()=>nedräkningstimer.remove(), 3000);
                
            const buttonStop=document.createElement('button');
            buttonStop.innerHTML='<button id="bortKnapp" class="btn btn-lg btn-dark">Stop</button>';
            tomatTimer.appendChild(buttonStop);
            
            buttonStop.addEventListener('click',(ev)=>{
                timerRing.pause();
                timerRing=anime({
                    targets: 'section#animera-logga',
                    scale: [
                        {value:2, duration:100, delay:100,easing:'easeInOutSine'},
                        {value:0, delay:10, easing:'easeInOutSine'},
                    ],
                    loop:false
                });
                setTimeout(()=>buttonStop.remove(), 1000);
                setTimeout(()=>location.reload(),2000);
            })
        }
    },1000)
  
    nedräkningsStopp.addEventListener('click', (ev)=>{
        clearInterval(interval1);
        countDown.isRunning=false;
    })
    nedräkningsResume.addEventListener('click', (ev)=>{
        clearInterval(interval1);
        countDown(timeLeftDisplay.innerHTML,minutesLeftDisplay.innerHTML)
    })
}
 
    
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
    
    
    






