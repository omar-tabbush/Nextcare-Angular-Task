import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { WeatherResponse } from '../types/weather-response';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getWeatherData(lat: number, lon: number): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get<WeatherResponse>(url);
  }
  abc(){
    this.http.request(
      'GET',
      'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=1b1b15e88af6b95175f437b14d8a0b07',
      {
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        },
        
        
      }

    )
  }
}
