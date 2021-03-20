const body = document.querySelector("body");

const IMAGE_COUNT = 7;

function getRandom(){
    return Math.floor(Math.random() * IMAGE_COUNT);
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