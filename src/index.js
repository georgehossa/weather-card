import "@babel/polyfill";
import "./_scss/main.scss";
//Import Weather Class
const { Weather } = require("./js/weather");
const { UI } = require("./js/ui");
const { Store } = require("./js/store");
//Instanciando Clases
const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);
const ui = new UI();

async function fetchWeather() {
  const data = await weather.getWeather();
  ui.render(data);
  ui.renderImage(data);
  console.log(data);
}
// Take input values
const changeWeather = function(e) {
  const city = ui.inputCity.value;
  const countryCode = ui.inputCountry.value;
  weather.changeLocation(city, countryCode);
  store.setLocationData(city, countryCode);
  fetchWeather();
};
// Listen button events
ui.button.addEventListener("click", changeWeather);
ui.inputCountry.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    changeWeather();
    e.preventDefault();
  }
});
ui.inputCity.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    changeWeather();
    e.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", fetchWeather);
