export class UI {
  constructor() {
    this.temp = document.querySelector('.data__temp');
    this.desc = document.querySelector('.data__description');
    this.city = document.querySelector('.data__city');
    this.button = document.querySelector('.form__button');
    this.inputCity = document.querySelector('.input__city');
    this.inputCountry = document.querySelector('.input__country');
    this.image = document.querySelector('.card__image');
  }

  render(weather) {
    this.temp.textContent = `${parseInt(weather.main.temp)  } ºC`;
    this.city.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
  }

  renderImage(weather) {
    const weatherMain = weather.weather[0].main;
    this.image.src = `./img/weather__${weatherMain}.png`;
    this.image.alt = `icon - ${weatherMain}`;
  }
}
