import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isSubmitted = false;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/claim/search']);
    }
  }
  invalid() {
    this.isSubmitted = true;
  }
  onSubmit() {
    this.isSubmitted = true;
    // do something with the form data
    this.auth
      .login(
        this.loginForm.value.username as string,
        this.loginForm.value.password as string
      )
      .subscribe((resp: any) => {
        if (resp instanceof HttpResponse) {
          localStorage.setItem('token', resp.body.token);
        } else localStorage.setItem('token', resp.token);
        this.router.navigate(['/claim/search']);
      });
    // reset the form
    this.loginForm.reset();
  }
}
