import "@babel/polyfill";
import './_scss/main.scss';
//Import Weather Class
const { Weather } = require('./js/weather');
const { UI } = require('./js/ui');
const weather = new Weather('Medellín', 'co');
const ui = new UI();

async function fetchWeather() {
  const data = await weather.getWeather();
  ui.render(data);
}

document.querySelector('.form__button').addEventListener('click', (e) => {
  const city = document.querySelector('.input__city').value;
  const countryCode = document.querySelector('.input__country').value;
  weather.changeLocation(city, countryCode);
  fetchWeather();
  e.preventDefault();

})

document.addEventListener('DOMContentLoaded', fetchWeather)