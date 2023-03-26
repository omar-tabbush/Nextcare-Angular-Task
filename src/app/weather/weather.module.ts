import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherHeaderComponent } from './weather-header/weather-header.component';
import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [WeatherHeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  exports: [WeatherHeaderComponent],
  providers: [WeatherService],
})
export class WeatherModule {}
