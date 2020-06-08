
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

const navbarToggle=document.querySelector('#nvbar-toggle')
const navbarList=document.querySelector('.nvbar-list')
const navBar=document.querySelector('.nvbar')
const toggleMeny=document.querySelector('.fa-bars')
const navbarListToggle=document.querySelector('#nvbar-list-toggle')
        
let myMusic;
let volumeMute=document.querySelector('#ljud-av');

const nedräkningsStopp=document.querySelector('#ned-stopp');
const nedräkningsResume=document.querySelector('#ned-resume');
const restartKnapp=document.querySelector('#ned-restart')
                
toggleMeny.addEventListener('click', (e)=>{
    navbarToggle.classList.toggle('navbar-view');
    navbarListToggle.classList.toggle('navbar-view');
})
      
//TOMATO CLASS: EN  TODO
class Todo{
    constructor(name,time1, time2){
        this.name=name; 
        this.time=[time1,time2];  
    }
}

//UI CLASS: TOMATO: HANDLE UI TASKTS
class UI{
    static displayTodos(){
        const todos = Store.getTodos();
      todos.forEach((todo)=>UI.addTodoToList(todo))
    }

    static addTodoToList(todo){
        const list=document.querySelector('#tomato-list');
        const row=document.createElement('tr');
        row.innerHTML=`
        <td class="column1"><h4>${todo.name}</h4><img src="tomat-vit-vector.png" style="height:100px; width:100px" class="added-tomato"></td>
        <td class="column3"><h4>${todo.time}</h4></td>
        <td class="countdown-column"><a href="#" class="btn btn-success btn-sm" alt="Start countdown-timer"><i class="fas fa-stopwatch-20 startTimer"></i></a></td>
        <td class="delete-column"><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteTodo(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    };

    static showAlert(message, className){
        const div=document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container=document.querySelector('.tomat-container');
        const form=document.querySelector('.tomater-innehåll');
        container.insertBefore(div, form);
      //Vanish in 3 seconds
        setTimeout(()=>document.querySelector('.alert').remove(), 3000);
    }

    static clearFields(){
        document.querySelector('#name').value=''; 
    }
}

function addAnime(todo){(anime({
    targets: todo,
    scale:[
        {value:1,duration:100, easing:'easeInOutSine'},
        {value:2,duration:200, easing:'easeInOutSine'},
        {value:1, duration:300, easing:'easeInOutSine'}
    ]
}))}
 
//FUNKAR-TIMER BÖRJAR NÄR MAN KLICKAR PÅ SIFFRAN
document.querySelector('#tomato-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('startTimer')){
        timeLeftX=e.target.parentElement.parentElement.previousElementSibling.innerText[0]+e.target.parentElement.parentElement.previousElementSibling.innerText[1]
        minutesLeftX=e.target.parentElement.parentElement.previousElementSibling.innerText[3]+e.target.parentElement.parentElement.previousElementSibling.innerText[4]
        if(!isNaN(timeLeftX), !isNaN(minutesLeftX)){
            countDown(timeLeftX, minutesLeftX)
        } else{
            console.log(!isNaN(timeLeftX), !isNaN(minutesLeftX))
            e.target.style.cursor='default'
        }
    } else if(e.target.classList.contains('btn-success')){
        timeLeftX=e.target.parentElement.previousElementSibling.innerText[0]+e.target.parentElement.previousElementSibling.innerText[1]
        minutesLeftX=e.target.parentElement.previousElementSibling.innerText[3]+e.target.parentElement.previousElementSibling.innerText[4]
        if(!isNaN(timeLeftX), !isNaN(minutesLeftX)){
            countDown(timeLeftX, minutesLeftX)
        } else{
            console.log(!isNaN(timeLeftX), !isNaN(minutesLeftX))
            e.target.innerHTML='<i class="fas fa-ban"></i>'
            e.target.style.cursor='default'
        }
      } 
});

const countownColumn=document.querySelector('.countdown-column');
const header=document.querySelector('header')
const nedräkningstimer=document.querySelector('.nedräkningstimer');
const angivenStarttid=document.querySelector('.angiven-starttid-spara');
const inputTimer=document.querySelector('.input-timer');
const startKnapp=document.querySelector('#start-button');

let timeLeftDisplay=document.querySelector('#time-left')
let minutesLeftDisplay=document.querySelector('#minutes-left')
let secondsLeftDisplay=document.querySelector('#seconds-left')

const startBtn=document.querySelector('#start-button')
let timerText =document.querySelector('#timer-text');
let minutesText =document.querySelector('#minutes-text');
let secondsText =document.querySelector('#seconds-text');
let background = document.querySelector('body');
let totalWorkTime=document.querySelector('#total-work-time');
let tomatStart=document.querySelector('#tomat-start')
const timerButtons=document.querySelector('.timer-buttons')
const loggan=document.querySelector('.tomaToDoLogga')

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

        volumeMute.addEventListener('click', (e)=>{
            volumeMute.classList.toggle('Tyst')
            if(volumeMute.classList.contains('Tyst')){
                volumeMute.innerText='Volume on'
            }else{
                volumeMute.innerText='Volume off'
            }
        })

      //NÄR TIDEN ÄR UTE
      if(currentTime<1){
          clearInterval(interval1);
          loggan.style.background="radial-gradient(ellipse at center, rgba(255,222,10,1) 0%, rgba(255,211,13,1) 3%, rgba(255,10,59,0.13) 57%, rgba(255,10,59,0) 65%)";
          loggan.style.padding="10px";
          timerButtons.style.display='none';
          if(volumeMute.classList.contains('Tyst')){
              startGame()
          }        
          let timerRing=anime({
              targets: 'section#animera-logga-new',
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

restartKnapp.addEventListener('click', (e)=>{
    setTimeout(()=>location.reload(),500);
})

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


// Store Class: Handles Storage
class Store {
    static getTodos() {
        let todos;
        if(localStorage.getItem('todos') === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        return todos;
    }

    static addTodo(todo) {
        const todos = Store.getTodos();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    static removeTodo(name) {
        const todos = Store.getTodos();
        todos.forEach((todo, index) => {
            if(todo.name === name) {
                todos.splice(index, 1);
            }
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}

// Event: Display Tomatos
document.addEventListener('DOMContentLoaded', UI.displayTodos);

// Event: Add a Todo
document.querySelector('#tomatodo-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const name = document.querySelector('#name').value;  
    let time=["00,00,00"];
    if(time=null,null){
        time=["00,00,00"]
    }

    // Validate
    if(name === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
    // Instatiate tomato
        const todo = new Todo(name, time);
    // Add Tomato to UIT
        UI.addTodoToList(todo);
    // Add tomato to store
        Store.addTodo(todo);
    // Show success message
        UI.showAlert('TomaTo-Do Added', 'success');
    // Clear fields
        UI.clearFields();
    }
});

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('column1')){
        e.target.classList.toggle('checked');
        if(e.target.classList.contains('checked')){
            addAnime(e.target);
        }
    }
    if(e.target.parentElement.classList.contains('column1')){
        e.target.parentElement.classList.toggle('checked');
        if(e.target.parentElement.classList.contains('checked')){
            addAnime(e.target);
        }
    }
})

// Event: Remove a Tomato
document.querySelector('#tomato-list').addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
    // Remove Tomato from UIT
        UI.deleteTodo(e.target);
    // Remove tomato from store NÅ TOMATENS NAMN, INTE INNEHÅLL
        Store.removeTodo(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
    // Show success message
        UI.showAlert('TomaTo-Do Removed', 'success');
    }
});

document.querySelector('#tomato-list').addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-danger')){
  // Remove Tomato from UI
        UI.deleteTodo(e.target);
        UI.showAlert('TomaTo-Do Removed', 'success');
    // Remove tomato from store FÖRSÖKER NÅ TOMATENS NAMN, INTE INNEHÅLL
        Store.removeTodo(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
    }
})





