import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ClaimCenterComponent } from './pages/claim-center/claim-center.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchCenterComponent } from './pages/search-center/search-center.component';
import { WeatherHeaderComponent } from './weather/weather-header/weather-header.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherHeaderComponent,
    children: [
      {
        path: 'claim',
        component: ClaimCenterComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'search',
        component: SearchCenterComponent,
        canActivate: [AuthGuard],
      },
      // {
      //   path: 'edit/:id',
      //   component: SearchCenterComponent,
      //   canActivate: [AuthGuard],
      // },
      { path: 'login', component: LoginComponent },
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
