import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHeaderComponent } from './weather/weather-header/weather-header.component';
import { WeatherModule } from './weather/weather.module';
import { ClaimCenterComponent } from './pages/claim-center/claim-center.component';
import { SearchCenterComponent } from './pages/search-center/search-center.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, ClaimCenterComponent, SearchCenterComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, WeatherModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
