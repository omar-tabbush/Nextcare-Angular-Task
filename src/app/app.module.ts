import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather and header/weather.module';
import { ClaimCenterComponent } from './pages/claim-center/claim-center.component';
import { SearchCenterComponent } from './pages/search-center/search-center.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtTokenInterceptor } from './interceptors/jwt-token.interceptor';
import { AuthService } from './auth/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
import { EditClaimComponent } from './pages/edit-claim/edit-claim.component';
import { ApplicationService } from './application.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ClaimCenterComponent,
    SearchCenterComponent,
    NotFoundComponent,
    LoginComponent,
    EditClaimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true,
    },
    AuthService,
    AuthGuard,
    ApplicationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
