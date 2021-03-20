const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_NAME = "u_name";
const u_name = localStorage.getItem(USER_NAME);



function askForName() {
    form.classList.add("showing");
    form.addEventListener("submit",submitHandler);
}


function submitHandler(event) {
    event.preventDefault();
    const currentValue = input.value;
    localStorage.setItem(USER_NAME, currentValue);
    displayGreeting(currentValue);
}

function displayGreeting(text) {
    
    form.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerHTML = `Hello, ${text}!`;
}

function init(){

    if(u_name === null) {
        askForName();
                
    } else {
       displayGreeting(u_name);
    }

}

init();

