import "@babel/polyfill";
import './_scss/main.scss';
//Import Weather Class
const { Weather } = require('./js/weather');
const { UI } = require('./js/ui');
const { Store } = require('./js/store');
//Instanciando Clases
const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);
const ui = new UI();

async function fetchWeather() {
  const data = await weather.getWeather();
  ui.render(data);
}

const changeWeather = function (e) {
  const city = ui.inputCity.value;
  const countryCode = ui.inputCountry.value;
  weather.changeLocation(city, countryCode);
  store.setLocationData(city, countryCode);
  fetchWeather();
  e.preventDefault();
}
ui.button.addEventListener('click', changeWeather)
ui.inputCountry.addEventListener('keyup', (e) => {
  if(e.keyCode === 13){
    changeWeather();
  }
})
ui.inputCity.addEventListener('keyup', (e) => {
  if(e.keyCode === 13){
    changeWeather();
  }
})

document.addEventListener('DOMContentLoaded', fetchWeather)