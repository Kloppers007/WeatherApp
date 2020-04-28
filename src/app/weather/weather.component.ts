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
  constructor(
    private formBuilder: FormBuilder,
    private openweatherapiService: OpenWeatherApiService
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({ location: [''] });
  }
  sendToAPI(formValues) {
    this.openweatherapiService
      .getWeather(formValues.location)
      .subscribe((data) => console.log(data));
  }
}
