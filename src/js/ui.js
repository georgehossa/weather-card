export class UI {
  constructor(){
    this.temp = document.querySelector('.data__temp')
    this.desc = document.querySelector('.data__description')
  }

  render(weather) {
    this.temp.textContent = weather.main.temp + ' ºC';
    this.desc.textContent = weather.weather[0]['description'];
  }
}