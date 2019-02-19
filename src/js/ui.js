export class UI {
  constructor(){
    this.temp = document.querySelector('.data__temp')
    this.desc = document.querySelector('.data__description')
    this.city = document.querySelector('.data__city')
  }

  render(weather) {
    this.temp.textContent = weather.main.temp + ' ºC';
    this.city.textContent = weather.name;
    this.desc.textContent = weather.weather[0]['description'];
  }
}