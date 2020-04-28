import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weather-app';
  lng: number;
  lat: number;
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        this.lng = location.coords.longitude;
        this.lat = location.coords.latitude;
      });
      //console.log(`longitude: ${lng} | latitude: ${lat}`);
    }
  }
}
