

//Event: Display Tomato-form
const body = document.querySelector('body');
const öppnaTomatFormulär=document.querySelector('#tomato-form');
const döljFormulär=document.querySelector('.fa-chevron-circle-up');
const visaAddTomat=document.querySelector('#visa-add-tomato')
const visaSökFält=document.querySelector('#visa-sökfält')
const sökFält=document.querySelector('#filterInput');
const toggleMeny=document.querySelector('.fa-bars');
const navbarToggle=document.querySelector('#nvbar-toggle');
const navbarListToggle=document.querySelector('#nvbar-list-toggle');
const tomatoForm=document.querySelector('#tomato-form');
const tomatodoForm =document.querySelector('.tomatodo-form');
const tomatLista = document.querySelector('#tomato-list');
const todoLista = document.querySelector('#todo-list');
const tomaterLista = document.querySelector('.tomater-lista');
const todosLisa = document.querySelector('.todo-lista');
//const header = document.querySelector('header');
const navicon = document.querySelector('.navicon');
const colorScheme = document.querySelectorAll('.navbar-container__color-schemes--color-scheme');
const totalTodoTid = document.querySelector('#total-todo-tid');




//NAVBAR-IKON-LINJE-ANIMATION
anime({
    targets: '.logo path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: 3
  });

/*   anime({
    targets: '.hero__svg  path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: 2
  }); */


 
/* 
   var path = anime.path('.hero__svg path');

anime({
  targets: '.hero__svg path',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});  */

/* 
var path = anime.path('.navicon rect');

anime({
  targets: '.navicon rect',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 2000,
  loop: 1
});  */

//animera blastens färg
/* anime({
    targets: '.hero__svg path',
    fill: 'rgb(19,28,140)', // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 500,
    loop: 10
  });

  //animera tomat-kroppens färg
  anime({
    targets: '.hero__svg stop',
    stopColor: 'rgb(255, 140, 0)', // -> from '28px' to '100%',
    offset: "50%",
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 500,
    loop: 10,
    delay: 100
  }); */

  anime({
    targets: '.hero__svg path',
    fill: 'rgb(19,28,140)', 
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 500,
    loop: 10
  });

  //animera tomat-kroppens färg
  anime({
    targets: '.hero__svg stop',
    stopColor: 'rgb(255, 230, 0)', 
    offset: "40%",
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 500,
    loop: 10,
    delay: 100
  });

navicon.addEventListener('click', (event) => {
    console.log('funkar');
    header.classList.toggle('open');
})

colorScheme.forEach((knapp) => {
    this.addEventListener('click', (e)=> {
        body.classList.toggle(e.target.classList[1]);
    })
})

if (visaAddTomat){
   visaAddTomat.addEventListener('click', (ev)=>{
   öppnaTomatFormulär.classList.toggle('osynlig');
}) 
document.querySelector('.fa-chevron-circle-up').addEventListener('click', (ev)=>{
    öppnaTomatFormulär.classList.toggle('osynlig');
 })
  }

//TOMATO CLASS: EN  TOMAT

class Tomato{
    //constructor(name, time1='00', time2='00'){
    constructor(name, time1, time2){
        this.name=name;                 
        this.time=[time1,time2];
    }
}

//TODO CLASS: EN  TODO
class Todo{
  constructor(name,time1='00', time2='00', checked='no'){
      this.name=name; 
      this.time=[time1,time2];  
      this.checked=checked;
      }
    }






//UI CLASS: TOMATO: HANDLE UI TASKTS
class UI{
    static displayTomatos(){
        const tomatos = Store.getTomatos();
        tomatos.forEach((tomato)=>UI.addTomatoToList(tomato))
    }


    static addTomatoToList(tomato){
         const tomaterObject=document.createElement('article');

         if ((tomato.time[0]=="00")&&(tomato.time[1]=="00")){
             tomato.time='';
        } 

         tomaterObject.innerHTML=`
         
        <section class="tomater-lista-namn-tomat-tid added-tomato">

            <svg class="hero__svg shape" width="300" height="300" viewBox="0 0 1804 1808" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="header-shape-gradient" x2="0.35" y2="1">
                        <stop offset="0%" stop-color="var(--color-stop)" />
                        <stop offset="30%" stop-color="var(--color-stop)" />
                        <stop offset="100%" stop-color="var(--color-bot)" />
                    </linearGradient>
                </defs>
                <path class="gradient-bg" id="tomat-kropp" d="M811.602 1660.5C1029.23 1696.18 1236.89 1667.68 1396.83 1592C1556.7 1516.35 1670.24 1392.72 1695.61 1237.96C1720.99 1083.2 1652.87 929.791 1525.52 807.048C1398.13 684.253 1210.44 590.936 992.812 555.255C775.184 519.574 567.527 548.072 407.586 623.756C247.713 699.408 134.174 823.033 108.8 977.794C83.4267 1132.55 151.544 1285.96 278.89 1408.71C406.289 1531.5 593.974 1624.82 811.602 1660.5Z" fill="#F41212" stroke="#928f8f" stroke-width="20"/>
                <path d="M534.22 318.32L875.719 461.819L875.719 120.317L1051.72 384.819L1292.92 230.32L1217.22 461.819L1503.22 461.819L1292.92 615.818L1580.22 725.819L919.72 670.82L534.22 318.32Z" fill="#67CA04" stroke="#928f8f" stroke-width="20"/>
            </svg>

            <h4 class="tomat-namn">${tomato.name}</h4>
            <h4 class="timer tomat-tid">${tomato.time}</h4>
        </section>
        <section class="tomater-lista-button-group">
            <a href="#endregion" class="knapp-1 btn-success knapp-liten" alt="Start countdown-timer"><i class="fas fa-stopwatch-20 startTimer"></i></a>
            <a href="#endregion" class="knapp-3 btn-info knapp-liten addFromMyTomatoesToTodo" alt="Add to TomaTo-do"><i class="fas fa-tasks addFromMyTomatoesToTodo"></i></a>
            <a href="#endregion" class="knapp-2 btn-danger knapp-liten"><i class="fas fa-times delete"></i></a>
        </section>
         `;
 
         tomaterLista.appendChild(tomaterObject);

         if(tomato.time=='') {
            tomaterObject.children[1].children[0].classList.add('disable')
            tomaterObject.children[1].children[0].classList.remove('knapp-1')
        }
     }
    
    static deleteTomato(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.parentElement.remove();
        } else if(el.classList.contains('btn-danger')){
          el.parentElement.parentElement.remove();
      }
    };


    static displayTodos(){
        const todos = Store.getTodos();
      todos.forEach((todo)=>UI.addTodoToList(todo))
    }


    /////////////

    static disableTomatoTimer(){
        const tomatos = Store.getTomatos();
      tomatos.forEach((tomato)=> {
        if(tomato.tid=='') {
            tomaterLista.forEach((tomat)=> {
                if(tomato.namn==tomat) {
                    console.log('samma')
                } else {
                    console.log('inte samma')
                }
            })
        }
      })
    }

    static disableTodoTimer(){
        const todos = Store.getTodos();
      todos.forEach((todo)=> {
          if(todo.tid=='') {
              console.log('DISABLE!')
            todoLista.forEach((tomat)=> {
                if(tomato.namn==tomat) {
                    console.log('samma')
                } else {
                    console.log('inte samma')
                }
            })
          }

      })
    }
    ////////////////

    

    static displayCheckedTodos(){
        const todos = Store.getTodos();
        todos.forEach((todo)=>{
            if(todo.checked=='yes') {
                console.log(`${todo.name} checked-status är: ${todo.checked}`)
                    document.querySelectorAll('.todo-lista>article').forEach((article)=>{
                       
                        console.log(article.children[1].children[1].textContent)
                        
                        if (todo.name == article.children[1].children[1].textContent) {
                            article.children[0].classList.toggle('checked')
                            console.log(article.children[0])
                        }
                    })
                
            } else {
                console.log(`${todo.name} checked-status är: ${todo.checked}`)
            }
        });
    }

    static addTodoToList(todo){
         const todoObject=document.createElement('article');
         if ((todo.time[0]=="00")&&(todo.time[1]=="00")){
            todo.time='';
         }
         
         
            todoObject.innerHTML=`

         <aside class="check-box">
         </aside>
         <section class="tomater-lista-namn-tomat-tid added-tomato">
        
         <svg class="hero__svg shape" width="300" height="300" viewBox="0 0 1804 1808" fill="none" xmlns="http://www.w3.org/2000/svg">
             <defs>
                 <linearGradient id="header-shape-gradient" x2="0.35" y2="1">
                     <stop offset="0%" stop-color="var(--color-stop)" />
                     <stop offset="30%" stop-color="var(--color-stop)" />
                     <stop offset="100%" stop-color="var(--color-bot)" />
                 </linearGradient>
             </defs>
             <path class="gradient-bg" id="tomat-kropp" d="M811.602 1660.5C1029.23 1696.18 1236.89 1667.68 1396.83 1592C1556.7 1516.35 1670.24 1392.72 1695.61 1237.96C1720.99 1083.2 1652.87 929.791 1525.52 807.048C1398.13 684.253 1210.44 590.936 992.812 555.255C775.184 519.574 567.527 548.072 407.586 623.756C247.713 699.408 134.174 823.033 108.8 977.794C83.4267 1132.55 151.544 1285.96 278.89 1408.71C406.289 1531.5 593.974 1624.82 811.602 1660.5Z" fill="#F41212" stroke="#928f8f" stroke-width="20"/>
             <path d="M534.22 318.32L875.719 461.819L875.719 120.317L1051.72 384.819L1292.92 230.32L1217.22 461.819L1503.22 461.819L1292.92 615.818L1580.22 725.819L919.72 670.82L534.22 318.32Z" fill="#67CA04" stroke="#928f8f" stroke-width="20"/>
         </svg>

        <h4 class="tomat-namn">${todo.name}</h4>
        <h4 class="tomat-tid">${todo.time}</h4>
        <section class="tomater-lista-button-group">
            <a href="#endregion" class="knapp-1 knapp-liten" alt="Start countdown-timer"><i class="fas fa-stopwatch-20 startTimer"></i></a>
            <a href="#endregion" class="knapp-2 knapp-liten"><i class="fas fa-times delete"></i></a>
        </section>
         `;
 
         todosLisa.appendChild(todoObject);

         if(todo.time=='') {
            console.log('DISABLE!', todoObject.children[1].children[1].textContent, todoObject.children[1].children[2].textContent, todoObject.children[1].children[3].children[0].classList)
            todoObject.children[1].children[3].children[0].classList.add('disable')
            todoObject.children[1].children[3].children[0].classList.remove('knapp-1')
        }



     }

    static todoCheckToggle(todo, todoObj) {
        const todos=Store.getTodos()
        console.log('aktuell todo: ', todo)
        console.log(todoObj)
        const aktuellTodo = todo;
        console.log(aktuellTodo)

        todos.forEach((todo) => {
                
                if(todo.name ==aktuellTodo){
                    console.log(todo.checked, aktuellTodo,todoObj)
                    todoObj.classList.toggle('checked')

            } 
            
                
            })

}


    static deleteTodo(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.parentElement.parentElement.remove();
            
        }
    };

    static showAlert(förälder, aktuelltobjekt, message, className){
        const div=document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        förälder.insertBefore(div, aktuelltobjekt);

        //Vanish in 3 seconds
        setTimeout(()=>document.querySelector('.alert').remove(), 3000);
    }

    static showAlertRed(aktuelltobjekt, message, className){
        const div=document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        if (aktuelltobjekt) {
            aktuelltobjekt.insertAdjacentElement('beforebegin', div);
        }
        //setlistener(div)
        //Vanish in 3 seconds
        setTimeout(()=>document.querySelector('.alert').remove(), 3000);
    }

    static clearFields(){
        document.querySelector('#name').value='';
        if(document.querySelector('#time1')){     
            document.querySelector('#time1').value='';
        };
        if(document.querySelector('#time1')){     
            document.querySelector('#time2').value='';
        }
        
    }
}

// Store Class: Handles Storage
class Store {
    static getTomatos() {
        let tomatos;
        if(localStorage.getItem('tomatos') === null) {
            tomatos = [];
        } else {
            tomatos = JSON.parse(localStorage.getItem('tomatos'));
        }
        return tomatos;
      }

    static getTodos() {
        let todos;
        if(localStorage.getItem('todos') === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        return todos;
      }

    static addTomato(tomato) {
        const tomatos = Store.getTomatos();
        tomatos.push(tomato);
        localStorage.setItem('tomatos', JSON.stringify(tomatos));
      }

    static addTodo(todo) {
        const todos = Store.getTodos();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
      }

    static checkTodo(checkedTodo) {
        const todos = Store.getTodos();
        todos.forEach((todo) => {
        if (todo.name == checkedTodo) {
         //   console.log(todo)
            if (todo.checked=='no') {
            todo.checked = 'yes';
            } else {
                todo.checked = 'no';
            }
        }
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    static removeTomato(name) {
        const tomatos = Store.getTomatos();
        tomatos.forEach((tomato, index) => {
            if(tomato.name === name) {
            tomatos.splice(index, 1);
            }
        });
        localStorage.setItem('tomatos', JSON.stringify(tomatos));
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
if (tomatoForm) {
document.addEventListener('DOMContentLoaded', UI.displayTomatos);
}
// Event: Display Todos
if (tomatodoForm) {
document.addEventListener('DOMContentLoaded', UI.displayTodos);
document.addEventListener('DOMContentLoaded', UI.displayCheckedTodos);
}

 // Event: Add a Tomato
if (tomatoForm) {
    tomatoForm.addEventListener('submit', (e) => {  
    // Prevent actual submit
    e.preventDefault();
    
   
    
    // Get form values
    const name = document.querySelector('#name').value;   
    const time1 = document.querySelector('#time1').value;
    const time2 = document.querySelector('#time2').value;
  
    // Validate
    if(name === '' || time1 === '' ||time2 === '') {
        UI.showAlert(e.target.parent, e.target.previousElementSibling, 'Please fill in all fields', 'red');
       // console.log(e.target, e.target.children[2])
    } else if(isNaN(time1) ||isNaN(time2)) {
        UI.showAlert(e.target, e.target.children[2], 'Please put in a number', 'red');
    } else if (time1[1]==undefined){
        UI.showAlert(e.target, e.target.children[2], 'Put in 2 numbers please', 'red')
    } else if(time2[1]==undefined){
        UI.showAlert(e.target, e.target.children[2], 'Put in 2 numbers please', 'red') 
    } else {
    // Instatiate tomato
        const tomato = new Tomato(name, time1, time2);
    // Add Tomato to UIT
        UI.addTomatoToList(tomato);
    // Add tomato to store
        Store.addTomato(tomato);
    // Show success message
        UI.showAlert(e.target, e.target.children[2], 'Tomato Added', 'green');
    // Clear fields
        UI.clearFields();
    //dölj formulär
        setTimeout(()=> {
            tomatoForm.classList.toggle('osynlig')
        },1000)
    }
    }); 
}

/// SÖKFUNKTION
// Get filterInput-element
let filterInput = document.getElementById('filterInput');
// Add event listener

/* if(filterInput){
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
  // Get filtervalue
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
  // Get hela tbody innehåll
    let lista = document.getElementById('tomato-list');
  // Get varje 1:a-cell per rad i tabellen
    let tomaterNamn = lista.querySelectorAll('td.column1');
  //Get varje rad i tabellen
    let rader=document.querySelectorAll('#tomato-list tr');

  // Loop through namn-kolumnen
    for(let i = 0;i < tomaterNamn.length;i++){  
        let tomat = tomaterNamn[i].getElementsByTagName('h4')[0];
    // If matched
        if(tomat.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            rader[i].style.display = '';
        } else {//DÖLJ RADER SOM INTE MATCHAR
            rader[i].style.display = 'none';
        }
    }
  }
}
  */

if(filterInput){
    filterInput.addEventListener('keyup', filterNames);
    
    function filterNames(){
      // Get filtervalue
        let filterValue = document.getElementById('filterInput').value.toUpperCase();
      // Get hela tbody innehåll
        let lista = document.getElementById('tomater-lista');
        console.log(lista)
      // Get varje 1:a-cell per rad i tabellen
        let tomaterNamn = lista.querySelectorAll('.tomat-namn');
        console.log(tomaterNamn.innerHTML)
      //Get varje rad i tabellen
        let rader=document.querySelectorAll('#tomato-list article');
        console.log(rader)
      // Loop through namn-kolumnen
        for(let i = 0;i < tomaterNamn.length;i++){  
            let tomat = tomaterNamn[i].getElementsByTagName('h4')[0];
        // If matched
            if(tomat.innerHTML.toUpperCase().indexOf(filterValue) > -1){
                rader[i].style.display = '';
            } else {//DÖLJ RADER SOM INTE MATCHAR
                rader[i].style.display = 'none';
            }
        }
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
 

const todoTabell=document.querySelector('.to-do-tabell');
//TODO-FUNKTIONER
// Event: Add a Todo
if (todosLisa) {
     //HÄMTA TOMAT-ARRAY FRÅN LOCAL STORAGE OCH SPARA I EN LISTA
     let todoData=[Store.getTodos()];
                
     //HÄMTAR TOMATER-ARRAY FRÅN LOCAL STORAGE       //LOCAL STORAGE FUNKTIONER DEKLARERAS I TOMAT.JS-FILEN. HÄMTAR JSON-DATA FRÅN LOCAL STORAGE OCH PARSE-AR/STRINGIFY-AR FÖR ANVÄNDNING I JS. // I TOMAT.JS DEKLARERAS CLASSERNA STORE, UI, TOMATO, TODO. EFTERSOM FUNKTIONERNA ÄR STATIC SÅ KAN DE ANVÄNDAS ÄVEN HÄR UTAN ATT FÖRST DEKLARERAS
     let todos=Store.getTodos();



     tomatodoForm.addEventListener('submit', (e) => {
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
            UI.showAlert(e.target.parentNode, e.target, 'Please fill in all fields', 'red');
        } else {
        // Instatiate todo
            const todo = new Todo(name);
        // Add Todo to UIT
            UI.addTodoToList(todo);
        // Add todo to store
            Store.addTodo(todo);
        // Show success message
            UI.showAlert(e.target.parentNode, e.target, 'To-Do Added', 'green');
        // Clear fields
            UI.clearFields();
        }
    });

  
    todosLisa.addEventListener('click', (e)=>{

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


 //CHECKA AV TASKS =======>> GÅR DET ATT SPARA AVCHECKNING? ANNARS FÖRSVINNER DEN NÄR MAN GÖR NÄSTA TASK, EFTERSOM SIDAN LADDAS OM NÄR MAN STÄNGER AV LARMET
   //spara i TOMAT/TODO i local storage?
        
        if(e.target.classList.contains('tomat-namn')){
             //TOMAT-NAMN  = e.target.textContent
                Store.checkTodo(e.target.textContent);
                //ASIDE-ELEMENT = e.target.textContent, e.target.parentElement.parentElement.children[0]
                UI.todoCheckToggle(e.target.textContent, e.target.parentElement.parentElement.children[0]);
            
        } else if(e.target.classList.contains('tomat-tid')){
            //TOMAT-NAMN  = e.target.previousElementSibling.textContent
            //ASIDE-ELEMENT = e.target.parentElement.parentElement.children[0]
               Store.checkTodo(e.target.previousElementSibling.textContent);
               UI.todoCheckToggle(e.target.previousElementSibling.textContent, e.target.parentElement.parentElement.children[0]);
           
       }  else if (e.target.classList.contains('check-box')) {
         //   TOMAT-NAMN = e.target
         // ASIDE-ELEMENT =  e.target.parentElement.children[1].children[1].textContent
            Store.checkTodo(e.target.parentElement.children[1].children[1].textContent);
               UI.todoCheckToggle(e.target.parentElement.children[1].children[1].textContent, e.target)

        } else if (e.target.classList.contains('gradient-bg')) {
            //ASIDE-ELEMENT = e.target.parentElement.parentElement.parentElement.children[0]
            //TOMAT-NAMN = e.target.parentElement.parentElement.children[1].textContent
            Store.checkTodo(e.target.parentElement.parentElement.children[1].textContent);
            UI.todoCheckToggle(e.target.parentElement.parentElement.children[1].textContent, e.target.parentElement.parentElement.parentElement.children[0])

        }




        if(e.target.classList.contains('delete')){
            console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement);
            console.log((e.target.parentElement.parentElement.parentElement.parentElement.children[1].textContent))
        // Remove Todo from UIT
            UI.deleteTodo(e.target);
        // Remove todo from store NÅ TODO:S NAMN, INTE INNEHÅLL
            Store.removeTodo(e.target.parentElement.parentElement.parentElement.children[1].textContent)
            
        // Show success message
            UI.showAlert(document.querySelector('.header__top'), document.querySelector('.logo-navicon'), 'To-Do Removed', 'red');
        }
    })

}




       //HÄMTA TOMAT-ARRAY FRÅN LOCAL STORAGE OCH SPARA I EN LISTA
       let tomatData=[Store.getTomatos()];
                
       //HÄMTAR TOMATER-ARRAY FRÅN LOCAL STORAGE       //LOCAL STORAGE FUNKTIONER DEKLARERAS I TOMAT.JS-FILEN. HÄMTAR JSON-DATA FRÅN LOCAL STORAGE OCH PARSE-AR/STRINGIFY-AR FÖR ANVÄNDNING I JS. // I TOMAT.JS DEKLARERAS CLASSERNA STORE, UI, TOMATO, TODO. EFTERSOM FUNKTIONERNA ÄR STATIC SÅ KAN DE ANVÄNDAS ÄVEN HÄR UTAN ATT FÖRST DEKLARERAS
       let tomatos=Store.getTomatos();
     


//FUNKTIONER FÖR VARJE TOMAT I LISTAN
if (tomaterLista) {
    tomaterLista.addEventListener('click', (e) => {
        //SÄTTA IGÅNG NEDRÄKNINGEN NÄR MAN KLICKAR PÅ TIMER-IKON ELLER GRÖN BAKGRUND PÅ TIMER-IKONEN
        if (e.target.classList.contains('startTimer')) {
            timmar=Number(e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[5].textContent[0]+e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[5].textContent[1]);
            minuter=Number(e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[5].textContent[3]+e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[5].textContent[4]);
            if (!isNaN(timmar), !isNaN(minuter)) {
                countDown(timmar, minuter);
            } else {
                console.log(!isNaN(timmar), !isNaN(minuter))
                console.log(timmar +'=' + typeof(timmar) +' och '+ minuter +'='+ typeof(minuter))
                e.target.style.cursor='default'
            }  
        } else if (e.target.classList.contains('btn-success')) {
            timmar = e.target.parentNode.parentNode.childNodes[1].childNodes[5].childNodes[0].textContent[0]+e.target.parentNode.parentNode.childNodes[1].childNodes[5].childNodes[0].textContent[1]
            minuter = e.target.parentNode.parentNode.childNodes[1].childNodes[5].childNodes[0].textContent[3]+e.target.parentNode.parentNode.childNodes[1].childNodes[5].childNodes[0].textContent[4]
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
// UI.showAlert(document.querySelector('.header__top'), document.querySelector('.logo-navicon'), 'Tomato Removed', 'red');
           
            // Remove tomato from store FÖRSÖKER NÅ TOMATENS NAMN, INTE INNEHÅLL
//  Store.removeTomato(e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].textContent) 
         tomatos.forEach((tomat,index)=> {

            let targetTomatNamn = e.target.parentElement.parentElement.parentElement.children[0].children[1].textContent;

                if(tomat.name == targetTomatNamn){
                    if(index==0){
                    console.log(tomat.name, index, 'yes', tomatos[index+1], 'först')
                    console.log(e.target)
                } else {
                    console.log(tomat.name, index, 'yes', tomatos[index-1])
                    console.log(e.target)
                }
            } else {
                console.log('no')
            }
            
})
        } else if (e.target.classList.contains('btn-danger')) {
            // Remove Tomato from UI
            UI.deleteTomato(e.target);
            // Show success message
//UI.showAlert(document.querySelector('.header__top'), document.querySelector('.logo-navicon'), 'Tomato Removed', 'red');
            
console.log(e.target.parentElement.parentElement.parentElement.parentElement)
console.log(tomatos.forEach((tomat)=> {
            if(tomat.name == e.target.name){
                console.log(tomat, index)
            } else {
                console.log('no')
            }
}))
            // Remove tomato from store FÖRSÖKER NÅ TOMATENS NAMN, INTE INNEHÅLL
//   Store.removeTomato(e.target.parentNode.parentNode.childNodes[1].childNodes[3].textContent.toLowerCase)
        }

        
        
           
            //KLICKA PÅ ATT-GÖRA-LISTA-KNAPPEN FÖR ATT SPARA I TODO-LISTA I LOCAL STORAGE // KLICKAR PÅ ATT-GÖRA-LISTA-FA-IKONEN   //KLICKAR PÅ RUTAN RUNT ATT-GÖRA-LISTA-FA-IKONEN
            if (e.target.classList.contains('fa-tasks')) {
                let targetName1 = e.target.parentNode.parentNode.previousElementSibling.childNodes[3].textContent.toLowerCase();
                tomatos.forEach((tomato, index) => {
                    //let targetName = e.target.parentNode.parentNode.previousElementSibling.childNodes[3].textContent.toLowerCase();
                    let tomatoName = tomatData.flat()[index].name.toLowerCase();
                    if (tomatoName==targetName1) {
                        Store.addTodo(tomato)
                        UI.showAlert(e.target.parentNode.parentNode.parentNode, e.target.parentNode.parentNode, 'To-do Added', 'green')
                        
                    }
                })
            } else if (e.target.classList.contains('btn-info')) {
                tomatos.forEach((tomato, index)=>{
                    let targetName = e.target.parentNode.parentNode.childNodes[1].childNodes[3].textContent.toLowerCase();
                    let tomatoName = tomatData.flat()[index].name.toLowerCase();        
                    if (tomatoName==targetName) {
                        Store.addTodo(tomato)
                        UI.showAlert(e.target.parentNode.parentNode, e.target.parentNode, 'To-do Added', 'green')
                    }
                })
    }
    })

}

