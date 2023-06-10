let inputValue= document.querySelector(".search-box")
let button= document.querySelector(".search-button")
let city= document.querySelector(".location .city")
let date= document.querySelector(".location .date")
let temp= document.querySelector(".current .temp")
let description= document.querySelector(".current .weather")
button.addEventListener("click", function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=5943ec8096ab59fcc1daefdb2a0723ab`)
    .then((response) => response.json())
    .then(displayData)
    .catch((err) => alert("Invalid City  Name"))
})
const displayData = (weather) => {
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    date.innerText = new Date();
    temp.innerHTML =`${Math.round(weather.main.temp)}℃`;
    description.innerText =`${weather.weather[0].description}`;
}
    
