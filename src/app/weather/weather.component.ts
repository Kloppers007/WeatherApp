import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OpenWeatherApiService } from '../openweatherapi.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  @Input() lat;
  @Input() lng;
  public weatherSearchForm: FormGroup;
  public weatherDetails;
  constructor(
    private formBuilder: FormBuilder,
    private openweatherapiService: OpenWeatherApiService
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({ location: [''] });
  }
  sendToAPI() {
    this.openweatherapiService
      .getWeather(this.lat, this.lng)
      .subscribe((data) => (this.weatherDetails = data));
  }
}
