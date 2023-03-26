import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimCenterComponent } from './pages/claim-center/claim-center.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchCenterComponent } from './pages/search-center/search-center.component';
import { WeatherHeaderComponent } from './weather/weather-header/weather-header.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherHeaderComponent,
    children: [
      { path: 'claim', component: ClaimCenterComponent },
      { path: 'search', component: SearchCenterComponent },
      // { path: 'login', component: SearchCenterComponent },

    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
