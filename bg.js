const body = document.querySelector("body");

function getRandom(){
    return Math.floor(Math.random() * 4);
}

function init(){
    const num = getRandom();
    console.log(num);
    const image = new Image();
    image.src = `images/${num+1}.jpg` ;
    image.classList.add("bgImage");
    body.prepend(image);
}

init();