import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

import {WeatherService} from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather;


  constructor(private weatherService: WeatherService) {

  }
  ngOnInit() {

  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode)
    .subscribe(
      res => this.weather = res,
      err => (
        alert("Ingrese Ciudad y Codigo de Pais correctos por favor!!"),
        this.weather = ""

      )
    );

  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      this.getWeather (cityName.value, countryCode.value);
      cityName.value = "";
      countryCode.value = "";
    } else {
      alert("Ingrese Ciudad y Codigo de Pais por favor!!!");
      this.weather = "";
    }
    cityName.focus();
    return false;
  }
}
