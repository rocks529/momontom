const country = document.querySelector(".js-country");
const CURRENT_COUNTRY = localStorage.getItem("country");

function init() {
  check_LS();
}

init();

function check_LS() {
  if (CURRENT_COUNTRY === null) {
    country.addEventListener("change", changeHandler);
  } else {
    displayCountry();
    country.addEventListener("change", changeHandler);
  }
}

function changeHandler() {
  localStorage.setItem("country", this.value);
}

function displayCountry() {
  country.value = localStorage.getItem("country");
}