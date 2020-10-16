

//Event: Display Tomato-form
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

if (visaAddTomat){
   visaAddTomat.addEventListener('click', (ev)=>{
   öppnaTomatFormulär.classList.toggle('view');
}) 
document.querySelector('.fa-chevron-circle-up').addEventListener('click', (ev)=>{
    öppnaTomatFormulär.classList.toggle('view');
 })
  }


  toggleMeny.addEventListener('click', (e)=>{
    navbarToggle.classList.toggle('navbar-view');
    navbarListToggle.classList.toggle('navbar-view');
})

//TOMATO CLASS: EN  TOMAT

class Tomato{
    constructor(name, time1, time2){
        this.name=name;                 
        this.time=[time1,time2];
    }
}

//TODO CLASS: EN  TODO
class Todo{
  constructor(name,time1='00', time2='00'){
      this.name=name; 
      this.time=[time1,time2];  
      }
    }






//UI CLASS: TOMATO: HANDLE UI TASKTS
class UI{
    static displayTomatos(){
        const tomatos = Store.getTomatos();

        tomatos.forEach((tomato)=>UI.addTomatoToList(tomato))
    }

    static addTomatoToList(tomato){
        const list=document.querySelector('#tomato-list');

        const row=document.createElement('tr');

        row.innerHTML=`
        <td class="column1"><h4>${tomato.name}</h4><img src="tomat-vit-vector.png" style="height:100px; width:100px" class="added-tomato"></td>
        
        <td class="column3"><h4 class="timer">${tomato.time}</h4></td>
        
        <td><a href="#tomater" class="btn btn-success btn-sm" alt="Start countdown-timer"><i class="fas fa-stopwatch-20 startTimer"></i></a></td>
        <td><a href="#tomater" class="btn btn-info btn-sm addFromMyTomatoesToTodo" alt="Add to TomaTo-do"><i class="fas fa-tasks addFromMyTomatoesToTodo"></i></a></td>
        <td><a href="#tomater" class="btn btn-danger btn-sm"><i class="fas fa-times delete"></i></a></td>
        `;

        list.appendChild(row);
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
        const container=document.querySelector('.container');
        const form=document.querySelector('.tomater-innehåll');
        container.insertBefore(div, form);
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
            todo.splice(index, 1);
            }
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}

/* // Event: Add a Tomato
öppnaTomatFormulär.addEventListener('submit', (e) => {
  // Prevent actual submit
    e.preventDefault();
    // Get form values
    const name = document.querySelector('#name').value;   
    const time1 = document.querySelector('#time1').value;
    const time2 = document.querySelector('#time2').value;
  // Instatiate todo
    const todo = new Todo(name, time);
  // Add todo to store
    Store.addTodo(todo);
    UI.showAlert('Todo Added', 'success')
}) */
 
// Event: Display Tomatos
if (tomatoForm) {
document.addEventListener('DOMContentLoaded', UI.displayTomatos);
}
// Event: Display Todos
if (tomatodoForm) {
document.addEventListener('DOMContentLoaded', UI.displayTodos);
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
        UI.showAlert('Please fill in all fields', 'danger');
    } else if(isNaN(time1) ||isNaN(time2)) {
        UI.showAlert('Please put in a number', 'danger');
    } else if (time1[1]==undefined){
        UI.showAlert('Put in 2 numbers please', 'danger')
    } else if(time2[1]==undefined){
        UI.showAlert('Put in 2 numbers please', 'danger') 
    } else {
    // Instatiate tomato
        const tomato = new Tomato(name, time1, time2);
    // Add Tomato to UIT
        UI.addTomatoToList(tomato);
    // Add tomato to store
        Store.addTomato(tomato);
    // Show success message
        UI.showAlert('Tomato Added', 'success');
    // Clear fields
        UI.clearFields();
    }
}); }

//

//
//BORTKOMMENTERAD FÖR ATT KOLLA FUNKTION I MY-TOMATOES - PÅVERKARS TO-DO-LISTA?
//
//
// Event: Remove a Tomato
/* document.querySelector('#tomato-list').addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
  // Remove Tomato from UIT
        UI.deleteTomato(e.target);
// Remove tomato from store FÖRSÖKER NÅ TOMATENS NAMN, INTE INNEHÅLL
        Store.removeTomato(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
  // Show success message
        UI.showAlert('Tomato Removed', 'success');
    }
}); */






/// SÖKFUNKTION
// Get filterInput-element
let filterInput = document.getElementById('filterInput');
// Add event listener

if(filterInput){
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
 


















function addAnime(todo){(anime({
    targets: todo,
    scale:[
        {value:1,duration:100, easing:'easeInOutSine'},
        {value:2,duration:200, easing:'easeInOutSine'},
        {value:1, duration:300, easing:'easeInOutSine'}
    ]
}))}
 

// Event: Add a Todo
if (tomatodoForm) {
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
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
    // Instatiate todo
        const todo = new Todo(name);
    // Add Todo to UIT
        UI.addTodoToList(todo);
    // Add todo to store
        Store.addTodo(todo);
    // Show success message
        UI.showAlert('To-Do Added', 'success');
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

// Event: Remove a Todo
document.querySelector('#tomato-list').addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
    // Remove Todo from UIT
        UI.deleteTodo(e.target);
    // Remove todo from store NÅ TODO:S NAMN, INTE INNEHÅLL
        Store.removeTodo(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
    // Show success message
        UI.showAlert('To-Do Removed', 'success');
    }
});

document.querySelector('#tomato-list').addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-danger')){
  // Remove ToDo from UI
        UI.deleteTodo(e.target);
        UI.showAlert('To-Do Removed', 'success');
    // Remove toDo from store FÖRSÖKER NÅ TOMATENS NAMN, INTE INNEHÅLL
        Store.removeTodo(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
    }
})
}

//FUNKTIONER FÖR VARJE TOMAT I LISTAN
if (tomatLista) {
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


        if (tomater){
                //HÄMTA TOMAT-ARRAY FRÅN LOCAL STORAGE OCH SPARA I EN LISTA
                let tomatData=[Store.getTomatos()];
                
                //HÄMTAR TOMATER-ARRAY FRÅN LOCAL STORAGE       //LOCAL STORAGE FUNKTIONER DEKLARERAS I TOMAT.JS-FILEN. HÄMTAR JSON-DATA FRÅN LOCAL STORAGE OCH PARSE-AR/STRINGIFY-AR FÖR ANVÄNDNING I JS. // I TOMAT.JS DEKLARERAS CLASSERNA STORE, UI, TOMATO, TODO. EFTERSOM FUNKTIONERNA ÄR STATIC SÅ KAN DE ANVÄNDAS ÄVEN HÄR UTAN ATT FÖRST DEKLARERAS
                let tomatos=Store.getTomatos();
                
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
        }
    });
}
