clockTag = document.querySelector("#clock");

function timeUpdate() {

  const date = new Date();
  const nowHours = date.getHours();
  const nowMinutes = date.getMinutes();
  const nowSeconds = date.getSeconds();

  const timeFormat = `${
    nowHours < 10 ? `0${nowHours}` : nowHours}:${
    nowMinutes < 10 ? `0${nowMinutes}` : nowMinutes}:${
    nowSeconds <10 ? `0${nowSeconds}` : nowSeconds}`;

  //console.log(timeFormat);
  clockTag.innerHTML = timeFormat;

}

function init() {
  timeUpdate();
  setInterval(timeUpdate, 1000)

}

init();