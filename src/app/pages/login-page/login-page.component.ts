import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  handleLogin(): void {
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe(
      (resp) => {
        if (resp.access_token) {
          this.authService.setAcessTokenOnLocalStorage(resp.access_token);
          this.router.navigate(['/']);
        }
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy(): void {
    // unsubscribe
  }
}
