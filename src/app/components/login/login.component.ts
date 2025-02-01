import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { ApiRequestService } from '../../services/api-request.service';
import { Login } from '../../models/auth.model';
import { catchError, tap, throwError } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  handleLogin(form: NgForm) {
    this.login(form.value as Login);
  }

    private login(loginData: Login) {
      this.authService.login(loginData).pipe(
        tap(response => {
          this.router.navigate(['/']);
        }),
        catchError(error => {
          return throwError(() => error);
        })
      ).subscribe();
    }
}
