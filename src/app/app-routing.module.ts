import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ClaimCenterComponent } from './pages/lazy/claim-center/claim-center.component';
import { EditClaimComponent } from './pages/lazy/edit-claim/edit-claim.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchCenterComponent } from './pages/lazy/search-center/search-center.component';
import { WeatherHeaderComponent } from './weather and header/weather-header/weather-header.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: WeatherHeaderComponent,
    children: [
      {path: 'claim' , loadChildren: () => import('./pages/lazy/lazy.module').then(m => m.LazyModule) , canActivate: [AuthGuard] },
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
