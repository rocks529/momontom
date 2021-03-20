const API_KEY = "7cff28ee63cf7f220e6a421538e1ffb9";

const weather = document.querySelector(".js-weather");
const h3 = weather.querySelector("h3");


const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
    return response.json();
    }).then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`;
    })
    }

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();

}

init();