
  
const startaTidtagning = document.querySelector('#starta-tidtagning');
const stoppaTidtagning = document.querySelector('#stoppa-tidtagning');
const nollställTidtagning = document.querySelector('#nollställ-tidtagning');
const nedräkningsSiffror = document.querySelector('#timer-text');
const newTomatoSection = document.querySelector('#new-tomato-section');
const header = document.querySelector('header');
const uppPil = document.querySelector('.upp-pil');
//const tomatoForm=document.querySelector('#tomato-form');

startaTidtagning.addEventListener('click', (event) => {
    stopwatch.start();
})

stoppaTidtagning.addEventListener('click', (event) => {
    stopwatch.stop();
})

nollställTidtagning.addEventListener('click', (event) => {
    stopwatch.nollställ();
})


    // VARJE NY TIDTAGNING
class Stopwatch {
    constructor(display, results) {
        this.running = false;
        this.display = display;
        this.results = results;
        this.laps = [];
        this.reset();
        this.print(this.times);
    }
    reset() {
            this.times = [ 0, 0, 0, 0 ];
    }

  

    start() {
        if (!this.time) this.time = performance.now();
        if (!this.running) {
            console.log(this.times);
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
            nedräkningsSiffror.classList.remove('osynlig');
            nedräkningsSiffror.classList.add('synlig');
        }
    }
        stop() {
            this.running = false;
            this.time = null;
        }
        restart() {
            if (!this.time) this.time = performance.now();
            if (!this.running) {
                this.running = true;
                requestAnimationFrame(this.step.bind(this));
            }
            this.reset();
        }
        clear() {
            clearChildren(this.results);
        }
        nollställ(){
            this.reset();
            this.running=false;
            clearChildren(this.results);
            requestAnimationFrame(this.step.bind(this));
            this.results ='00:00:00'
            this.print();
        } 
        step(timestamp) {
            if (!this.running) return;
            this.calculate(timestamp);
            this.time = timestamp;
            this.print();
            requestAnimationFrame(this.step.bind(this));
        }
        calculate(timestamp) {
            var diff = timestamp - this.time;
            // Hundredths of a second are 100 ms
            this.times[3] += diff / 10;
            // Seconds are 100 hundredths of a second
            if (this.times[3] >= 100) {
                this.times[2] += 1;
                this.times[3] -= 100;
            }
            // Minutes are 60 seconds
            if (this.times[2] >= 60) {
                this.times[1] += 1;
                this.times[2] -= 60;
            }
            // Hours are 60 minutes
            if (this.times[1] >= 60) {
                this.times[0] += 1;
                this.times[1] -= 60;
            }
        }
        
        //ÄNDRA TEXTEN -- FÖR SJÄLVA TIDTAGNINGEN SOM GÖRS I STOPWATCH-KLASSEN 
        print() {
            this.display.innerText = this.format(this.times);
        }
        



    //HUR TIDEN VISAS PÅ SIDAN
        format(times) {
            return `\
            ${pad0(times[0], 2)}:\
            ${pad0(times[1], 2)}:\
            ${pad0(Math.floor(times[2]), 2)}`;
        }
}
    
      //UTANFÖR CLASS

function pad0(value, count) {
    var result = value.toString();
    for (; result.length < count; --count)
        result = '0' + result;
    return result;
}
    
function clearChildren(node) {
    while (node.lastChild)
    node.removeChild(node.lastChild);
}
    
//VARJE TIDTAGNING - SYNS PÅ SIDAN GENOM PRINT-FUNKTIONEN SOM ÄNDRAR INNERTEXT
//SKAPAR NY STOPWATCH-CLASS
let stopwatch = new Stopwatch(
    document.querySelector('#timer-text'),
    document.querySelector('#nedräkning'));

//SPARAR TOMATTID TILL FORMULÄRET FÖR NY TOMATO    
//const addFormulär=document.querySelector('.container');
const tomatTimerTidtagning=document.querySelector('.tomat-timer-tidtagning'); 
const skapaTomat=document.querySelector('#skapa-tomat');
const sparaTomatFormulär = document.querySelector('#stopwatch-save-tomato-form');
const saveTomatobutton = document.querySelector('.save-tomato');

    
function sparaTomat(name, time1, time2){
    if(name === '') {
        UI.showAlert('Please fill in all fields', 'red');
    } else {
        newTomatoSection.classList.toggle('valid');
    // Instatiate tomato
    const tomato = new Tomato(name, time1, time2);
    // Add Tomato to UI
    //    UI.addTomatoToList(tomato);
    // Add tomato to store
        Store.addTomato(tomato);
    // Show success message
        UI.showAlert(sparaTomatFormulär, saveTomatobutton, 'Tomato Added', 'green');
    // Clear fields
         UI.clearFields();
    }}

function avrundning(name) {
    let timeX = stopwatch.times;
   
    let exakttid=[timeX[0], timeX[1], timeX[2], timeX[3]]; 
      
    console.log(exakttid)   
    let avrundadtid=[timeX[0],timeX[1],timeX[2],(Math.round(timeX[3]))]
    console.log(avrundadtid)
    if(avrundadtid[3]>=50){
        avrundadtid[2]++
    };
    if(avrundadtid[2]>30){
        avrundadtid[1]++;
    };

    let rättTid=[avrundadtid[0],avrundadtid[1]];
    console.log(rättTid)

    let formateradTid=pad0(rättTid[0], 2)+ pad0(rättTid[1], 2)
    let formateradTid1 = pad0(avrundadtid[0], 2)
    let formateradTid2 = pad0(avrundadtid[1], 2)
    //gör formaterad tid till två parametrar, hur returnera två separata värden? 
    // const tomato = new Tomato(name, time1, time2);


    console.log(formateradTid)
    console.log(formateradTid1)
    console.log(formateradTid2)
   // const tidsSträng = formateradTid[0].toString+formateradTid[1].toString
    //return formateradTid1, formateradTid2;
   // return tidsSträng;
   sparaTomat(name, formateradTid1, formateradTid2);
};



skapaTomat.addEventListener('click', (ev)=>{    
    //addFormulär.style.display='block';
    //skapaTomat.style.opacity='0';
  //  tomatTimerTidtagning.style.margin='200px auto 20px';
    newTomatoSection.classList.add('synlig');
    newTomatoSection.classList.remove('osynlig');
    skapaTomat.classList.toggle('osynlig');
})


uppPil.addEventListener('click', (e)=> {
    newTomatoSection.classList.add('osynlig');
    skapaTomat.classList.toggle('osynlig');
})

sparaTomatFormulär.addEventListener('submit', (e) => {
    e.preventDefault(); 
    // Get form values
     const name = document.querySelector('#name').value;
     avrundning(name);
    //                   console.log(e.target.parentNode, e.target, name)
    if(newTomatoSection.classList.contains('valid')) {
        setTimeout(() => {
        newTomatoSection.classList.add('synlig');
        skapaTomat.classList.toggle('osynlig');
    }, 1000);
    }
});



 anime({
    targets: 'section#animera-logga-new-new',
    translateY: [
        {value:750, duration:700, delay:400, easing:'easeInOutSine'},
        {value:700, duration:850},
        ],
    translateX: [
        {value:'100%', duration:1000, delay:400, easing:'easeInOutSine'}
        ],
    skewX:[
        {value:30, duration:100, delay:600,easing:'easeInOutSine'},
        {value:-25, delay:10, easing:'easeInOutSine'},
        {value:0, easing:'easeInOutSine'},
        ],
    scale:[
        {value: 1.3, duration: 500, delay:900,easing:'easeOutSine'}
        ],
    rotate:{
        value: '2turn', delay:700,
        easing: 'easeInOutSine'
    }
});

anime({
    targets: 'section#animera-h1-new',
    translateY: [
        {value:650, duration:700, delay:400}
        ],
    skewX:[
        {value:30, duration:100, delay:600,easing:'easeInOutSine'},
        {value:-25, delay:10, easing:'easeInOutSine'},
        {value:0, easing:'easeInOutSine'},
        ]
});
        
