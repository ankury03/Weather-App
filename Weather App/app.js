const place = document.querySelector('.location');
const card= document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon')

// UI update
const UI = data => {
 const cityDets = data.cityDets;
 const weather = data.weather;

 details.innerHTML = `
 <h2>${cityDets.EnglishName}</h2>
 <div class="weather">${weather.WeatherText}</div>
 <div class="temp">
   <span>${weather.Temperature.Metric.Value}</span>
   <span>&deg;C</span>
 </div>
 `
const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src' , iconSrc);

let timeSrc = null;
if(weather.IsDayTime){
    timeSrc = 'img/day.svg';
}else{
    timeSrc = 'img/night.svg';
}
time.setAttribute('src' , timeSrc);

 if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
 }
}

const cityUpdate = async (cityForm) => {
const cityDets = await getCity(cityForm);
const weather = await getWeather(cityDets.Key);
return {
cityDets: cityDets,
weather: weather
};
};

place.addEventListener('submit' , e => {
e.preventDefault();
const cityForm = place.city.value.trim();
place.reset();
cityUpdate(cityForm)
.then(data => UI(data))
.catch(error => console.log(error));
});