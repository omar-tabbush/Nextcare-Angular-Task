import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-header',
  templateUrl: './weather-header.component.html',
  styleUrls: ['./weather-header.component.css'],
})
export class WeatherHeaderComponent implements OnInit {
  weatherData: any;
  lat: number = 0;
  lon: number = 0;
  constructor(private weatherService: WeatherService, private router: Router) {}
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.weatherService
        .getWeatherData(+position.coords.latitude, +position.coords.longitude)
        .subscribe((data) => {
          this.weatherData = data;
          console.log(this.weatherData);
        });
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    const token: string | null =
      (localStorage.getItem('token') as string) || null;
    if (token) {
      return true;
    } else return false;
  }
}
