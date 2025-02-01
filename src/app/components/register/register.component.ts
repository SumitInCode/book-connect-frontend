import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {Router, RouterLink} from '@angular/router';
import { ApiRequestService } from '../../services/api-request.service';
import { catchError, tap, throwError } from 'rxjs';
import { Register } from '../../models/auth.model';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private apiRequestService = inject(ApiRequestService);
  private router = inject(Router);

  handleRegister(form: NgForm) {
    const registerData = form.value as Register;
    this.register(registerData);
  }

  private register(userData: Register) {
    this.apiRequestService.register(userData).pipe(
      tap(response => {
        console.log('Registration Successful:', response);
        this.router.navigate(['/login']);
      }),
      catchError(error => {
        console.error('Registration failed', error);
        return throwError(() => error);
      })
    ).subscribe();
  }
  
}
