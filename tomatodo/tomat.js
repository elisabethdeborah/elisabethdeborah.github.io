

//Event: Display Tomato-form
const öppnaTomatFormulär=document.querySelector('#tomato-form');
const döljFormulär=document.querySelector('.fa-chevron-circle-up');
const visaAddTomat=document.querySelector('#visa-add-tomato')
const visaSökFält=document.querySelector('#visa-sökfält')
const sökFält=document.querySelector('#filterInput');
const toggleMeny=document.querySelector('.fa-bars')
const navbarToggle=document.querySelector('#nvbar-toggle')
const navbarListToggle=document.querySelector('#nvbar-list-toggle')

  visaAddTomat.addEventListener('click', (ev)=>{
   öppnaTomatFormulär.classList.toggle('view');
})
document.querySelector('.fa-chevron-circle-up').addEventListener('click', (ev)=>{
    öppnaTomatFormulär.classList.toggle('view');
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
  constructor(name,time1, time2){
      this.name=name; 
      this.time=[time1,time2];  
      }}

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
        
        <td><a href="#" class="btn btn-success btn-sm" alt="Start countdown-timer"><i class="fas fa-stopwatch-20 startTimer"></i></a></td>
        <td><a href="#" class="btn btn-info btn-sm addFromMyTomatoesToTodo" alt="Add to TomaTo-do"><i class="fas fa-tasks addFromMyTomatoesToTodo"></i></a></td>
        <td><a href="#" class="btn btn-danger btn-sm"><i class="fas fa-times delete"></i></a></td>
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
        document.querySelector('#time1').value='';
        document.querySelector('#time2').value='';
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

    static removeTomato(name) {
        const tomatos = Store.getTomatos();
        tomatos.forEach((tomato, index) => {
            if(tomato.name === name) {
            tomatos.splice(index, 1);
            }
        });
        localStorage.setItem('tomatos', JSON.stringify(tomatos));
    }
}

// Event: Add a Tomato
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
    UI.showAlert('TomaTo-do Added', 'success')
})

// Event: Display Tomatos
document.addEventListener('DOMContentLoaded', UI.displayTomatos);

// Event: Add a Tomato
document.querySelector('#tomato-form').addEventListener('submit', (e) => {  
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
});

// Event: Remove a Tomato
document.querySelector('#tomato-list').addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
  // Remove Tomato from UIT
        UI.deleteTomato(e.target);
// Remove tomato from store FÖRSÖKER NÅ TOMATENS NAMN, INTE INNEHÅLL
        Store.removeTomato(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
  // Show success message
        UI.showAlert('Tomato Removed', 'success');
    }
});

/// SÖKFUNKTION
// Get filterInput-element
let filterInput = document.getElementById('filterInput');
// Add event listener
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

