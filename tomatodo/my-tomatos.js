
        
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
             /*  {value:-500, duration:3000, delay:800, easing:'easeInOutSine'}, */
              {value:67, delay:2000, duration:2000},
          ],
          skewY:[
           /*  {value:20, duration:100, delay:1000,easing:'easeInOutSine'}, */
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
const timerButtons=document.querySelector('.timer-buttons')
const inputTimer=document.querySelector('.input-timer');
const startKnapp=document.querySelector('#start-button');
const angivenStarttid=document.querySelector('.angiven-starttid-spara');
const tomatTimer=document.querySelector('.tomat-timer');
const tomatStart=document.querySelector('#tomat-start')
const öppnaLäggTill=document.querySelector('#länk-öppna-form-sök');
const tomatoForm=document.querySelector('#tomato-form')
const navbarList=document.querySelector('.nvbar-list')

let timeLeftDisplay=document.querySelector('#time-left')
let minutesLeftDisplay=document.querySelector('#minutes-left')
let secondsLeftDisplay=document.querySelector('#seconds-left')
let secondsLeft=secondsLeftDisplay.innerHTML=parseInt(secondsText.innerHTML,10)
const startBtn=document.querySelector('#start-button')

let animerah1=document.querySelector('#animera-h1-my-tomatoes')
const vitLogga=document.querySelector('#animera-logga-new-vit')
const rödLogga=document.querySelector('#animera-logga-new')
const restartKnapp=document.querySelector('#ned-restart')
const h1=document.querySelector('h1')
const spanTomatoEs=document.querySelector('span.tomatoEs')
const loggan=document.querySelector('.tomaToDoLogga')


toggleMeny.addEventListener('click', (e)=>{
    navbarToggle.classList.toggle('navbar-view');
    navbarListToggle.classList.toggle('navbar-view')
})

function getTomatTid(){
    const list=document.querySelector('#tomato-list');
        const row=document.createElement('tr');
        row.innerHTML=`
        <td>${tomato.name}</td>
        <td>${tomato.author}</td>
        <td class="timer">${tomato.time}</td>
        <td><a href="#" class="btn btn-primary btn-sm start-timer-lista">Start timer</a></td>
        `;
        list.appendChild(row);
}


//FUNKAR-TIMER BÖRJAR NÄR MAN KLICKAR PÅ SIFFRAN
document.querySelector('#tomato-list').addEventListener('click', (e) => {
    if(e.target.classList.contains('timer')){
        timeLeftX=e.target.innerHTML[0]+e.target.innerHTML[1]
        minutesLeftX=e.target.innerHTML[3]+e.target.innerHTML[4]
        if(!isNaN(timeLeftX), !isNaN(minutesLeftX)){
            countDown(timeLeftX, minutesLeftX)
        } else{
            console.log(!isNaN(timeLeftX), !isNaN(minutesLeftX))
            e.target.style.cursor='default'
        }
    }else if(e.target.classList.contains('startTimer')){
        timeLeftX=e.target.parentElement.parentElement.previousElementSibling.innerText[0]+e.target.parentElement.parentElement.previousElementSibling.innerText[1]
        minutesLeftX=e.target.parentElement.parentElement.previousElementSibling.innerText[3]+e.target.parentElement.parentElement.previousElementSibling.innerText[4]
        if(!isNaN(timeLeftX), !isNaN(minutesLeftX)){
            countDown(timeLeftX, minutesLeftX);
        } else{
            console.log(!isNaN(timeLeftX), !isNaN(minutesLeftX))
            e.target.style.cursor='default'
        }  
    }
});

document.querySelector('#tomato-list').addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-success')){
        timeLeftX=e.target.parentElement.previousElementSibling.innerText[0]+e.target.parentElement.previousElementSibling.innerText[1]
        minutesLeftX=e.target.parentElement.previousElementSibling.innerText[3]+e.target.parentElement.previousElementSibling.innerText[4]
        if(!isNaN(timeLeftX), !isNaN(minutesLeftX)){
            countDown(timeLeftX, minutesLeftX);
        } else{
            console.log(!isNaN(timeLeftX), !isNaN(minutesLeftX))
            e.target.innerHTML='<i class="fas fa-ban"></i>'
            e.target.style.cursor='default'
        }  
    }
})

// Event: Remove a Tomato
document.querySelector('#tomato-list').addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
  // Remove Tomato from UIT
        UI.deleteTomato(e.target);
  // Remove tomato from store FÖRSÖKER NÅ TOMATENS NAMN, INTE INNEHÅLL
        Store.removeTomato(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent)  
  // Show success message
        UI.showAlert('TomaTo-Do Removed', 'success');
    }
});
  
document.querySelector('#tomato-list').addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-danger')){
    // Remove Tomato from UI
        UI.deleteTomato(e.target);
        UI.showAlert('TomaTo-Do Removed', 'success');
    // Remove tomato from store FÖRSÖKER NÅ TOMATENS NAMN, INTE INNEHÅLL
        Store.removeTomato(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
    }
})

document.querySelector('#tomato-list').addEventListener('click', (e)=>{
    if(e.target.classList.contains('danger')){
        timeLeftX=e.target.parentElement.previousElementSibling.innerText[0]+e.target.parentElement.previousElementSibling.innerText[1]
        minutesLeftX=e.target.parentElement.previousElementSibling.innerText[3]+e.target.parentElement.previousElementSibling.innerText[4]
    }
})

//LISTA TOMAT-OBJEKT
let tomatData=[Store.getTomatos()];

//LISTA SPARADE TOMATERS NAMN
nameArr=[];

//LISTA SPARADE TOMATERS AUTHORS
authorArr=[];

//LISTA SPARADE TOMATERS TID-LISTOR
timeArr=[];

//LISTA SPARADE TOMATERS NAMN OCH TIDER
tomatArr=[];

let tomatos=Store.getTomatos();
document.querySelector('#tomato-list').addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-tasks')){
        tomatos.forEach((tomato, index)=>{
            let targetName = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText.toLowerCase();
            console.log(targetName);
            let tomatoName = tomatData.flat()[index].name.toLowerCase();
            if(tomatoName!==targetName){
            }else{
                Store.addTodo(tomato)
                UI.showAlert('TomaTo-do Added', 'success')
            }
        })
    }
    else if(e.target.classList.contains('btn-info')){
        tomatos.forEach((tomato, index)=>{
            let targetName = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText.toLowerCase();
            let tomatoName = tomatData.flat()[index].name.toLowerCase();        
            if(tomatoName!==targetName){
            }else{
                Store.addTodo(tomato)
                UI.showAlert('TomaTo-do Added', 'success')
            } 
        })
    }
})
        
startBtn.addEventListener('click', (ev)=>{
    getTomatTid();
})

function countDown(timeLeftX,minutesLeftX){
    nedräkningstimer.style.display='flex';
    nedräkningstimer.style.transitionDuration='250ms';
    timerButtons.style.display='flex';
    timerButtons.style.transitionDuration='250ms';
    angivenStarttid.style.display='none';
    angivenStarttid.style.transitionDuration='250ms';
    startBtn.style.display='none';
    startBtn.style.transitionDuration='250ms';
    inputTimer.style.display='none';
    inputTimer.style.transitionDuration='250ms';
    tomatoForm.style.display='none';
    tomatoForm.style.transitionDuration='250ms';

    //TIMMAR
    let timeLeft=parseInt(timeLeftX,10);
    //MINUTER
    let minutesLeft=parseInt(minutesLeftX,10)
    //SEKUNDER
    let secondsLeft=parseInt(secondsLeftDisplay.innerHTML,10);
   
    let timeLeft3=timeLeft*60*60+minutesLeft*60

    let interval1=  setInterval(function(){    
        
    countDown.runnning=true;    
    //TIDUTRÄKNING AV INPUT1, DVS HELA TIMMAR
    let currentTime=timeLeft3--;
        tomatStart.style.minHeight='350px'
        öppnaLäggTill.style.display='none'
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
    if(timeLeftDisplay.innerHTML==NaN||isNaN(timeLeftDisplay.innerHTML)){
        console.log('isNaN')
    }
    volumeMute.addEventListener('click', (e)=>{
        volumeMute.classList.toggle('tyst')
        if(volumeMute.classList.contains('tyst')){
            volumeMute.innerText='Volume on'
        } else{
            volumeMute.innerText='Volume off'
        }
    })


                //NÄR TIDEN ÄR UTE
        if(currentTime<1){
            clearInterval(interval1);
            loggan.style.background="radial-gradient(ellipse at center, rgba(255,222,10,1) 0%, rgba(255,211,13,1) 3%, rgba(255,10,59,0.13) 57%, rgba(255,10,59,0) 65%)";
            loggan.style.padding="10px";
            spanTomatoEs.style.color="red";
            timerButtons.style.display='none';
                
            if(volumeMute.classList.contains('tyst')){
                startGame()
            }
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

            background.style.backgroundColor='yellow';
            background.style.background='linear-gradient(to bottom, rgba(255,10,59,0.87) 0%, rgba(255,10,59,0.89) 13%, rgba(255,200,15,1) 91%, rgba(255,222,10,1) 100%)'
            nedräkningstimer.innerHTML="<h1 class='times-up'>Time's up!</h1>";
            setTimeout(()=>nedräkningstimer.remove(), 3000);
                    
            const buttonStop=document.createElement('button');
            buttonStop.innerHTML='<button id="bortKnapp" class="btn btn-dark btn-lg">Stop</button>';
            tomatStart.appendChild(buttonStop);        
            buttonStop.addEventListener('click',(ev)=>{
                timerRing.pause();
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


const nedräkningsStopp=document.querySelector('#ned-stopp');
const nedräkningsResume=document.querySelector('#ned-resume');

restartKnapp.addEventListener('click', (e)=>{
    setTimeout(()=>location.reload(),500);
})

let myMusic;
let volumeMute=document.querySelector('#ljud-av');

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


