const containerInputs = document.querySelector('.container-inputs');
const inputValue = document.getElementById('input');
let containerListTask = document.getElementById('container-list-task');
let elementUl = document.querySelector('.ul')



containerInputs.addEventListener('submit', handleSubmit);

message();


function message() {


    let subtitle = document.querySelector('h2');


     if(!subtitle) {
        subtitle = document.createElement('h2');
    }


    subtitle.classList.add('task-message');

    subtitle.textContent = elementUl.firstElementChild ? 'Tareas por hacer:' : 'No hay tareas aún.';
    

    elementUl.before(subtitle); //before or after para color antes o despues del elemento preseleccionado
}



//Function for identify the value of input and conect with event  1.-
function handleSubmit(e) {
    e.preventDefault();

    const toDo = inputValue.value;
    

    createHomework(toDo)

    this.reset();  //<--- that THIS is a reference in this code to form(container-inputs) and RESET() clean the input of characters.
    message(); //funcion message everytime that this event is active
}

//Create and print in the DOM the new task with the value of input   2.-
function createHomework(value) {
   let elementoUl =  containerListTask.lastElementChild;
   const newTask = document.createElement('li');
   newTask.textContent= value ;
   elementoUl.appendChild(newTask);

   addEvents(newTask);
}



//Eliminar elementos
function addEvents(element){
    element.addEventListener('dblclick', function() {
        //eliminar
       element.remove(); //remove para remover elementos
    });
}

