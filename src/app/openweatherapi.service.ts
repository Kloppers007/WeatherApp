import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherApiService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
        lat +
        '&lon=' +
        lng +
        '=&APPID=8efae9d98e5cb9e674cd59fb3fec08b3'
    );
  }
}
