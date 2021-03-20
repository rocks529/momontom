const h1 = document.querySelector("h1");



h1.addEventListener("click", clickHandler);

function clickHandler(){
  const hasClass = h1.classList.contains("clicked");

  console.log(hasClass);
  console.log(h1.classList);

  h1.classList.toggle("clicked")

  // if(!hasClass) {
  //   h1.classList.add("clicked");
  // } else {
  //   h1.classList.remove("clicked");
  // }

}