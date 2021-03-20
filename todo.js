const toDoForm = document.querySelector(".js-todo");
const toDoInput = toDoForm.querySelector("input");
const ToDoList = document.querySelector(".js-list");

let toDoArray = [];

function loadTodo() {
    const loadedTodo = localStorage.getItem("todo_list");

    if (loadedTodo !== null) {
        const parsedTodo = JSON.parse(loadedTodo);
        console.log(parsedTodo);
        parsedTodo.forEach(function(todo) {
            displayTodo(todo.text);
        });
        
    };
    
}

function save_LS(array){
    localStorage.setItem("todo_list", JSON.stringify(array));
}


function submitHandler(event){
    event.preventDefault();
    currentValue = toDoInput.value;
    toDoInput.value="";
    displayTodo(currentValue);
}

function deleteTodo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    ToDoList.removeChild(li);
    const cleanTodo = toDoArray.filter(function(todo) {
        return todo.id !== parseInt(li.id);
    });
    toDoArray = cleanTodo;
    save_LS(toDoArray);
}

function displayTodo(text) {
    console.log(`${text} updated!`);
    const newId = toDoArray.length + 1;
    const toDoObj = {
        text: text,
        id: newId
    };
    toDoArray.push(toDoObj);
    save_LS(toDoArray);

    const li = document.createElement("li");
    li.id = newId;
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerText = "X";
    delBtn.addEventListener("click",deleteTodo);
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    ToDoList.appendChild(li);

}



function init(){

    loadTodo();
    
    toDoForm.addEventListener("submit", submitHandler);

}

init();
