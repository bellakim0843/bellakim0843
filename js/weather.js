const API_KEY = "cc812c5787ac476afa7432d5d5249d71";




function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=${API_KEY}`;
    //const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather #cel");
            const citys = document.querySelector("#weather #temp");
            weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp - 273.15)}℃`;
            citys.innerText = "Dublin";
        });
}

function onGeoError() {
    alert("Can't load the weather of you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);