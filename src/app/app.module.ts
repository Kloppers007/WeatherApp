import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OpenWeatherApiService } from './openweatherapi.service';

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [OpenWeatherApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
