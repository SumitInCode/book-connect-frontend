import {Component, inject, OnInit} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {CommonModule, NgClass} from '@angular/common';
import {NavigationStart, Router, RouterLink} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIcon,
    NgClass,
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  isLogined = false;
  isMenuOpen = false;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if(this.isMenuOpen) {
          this.toggleMenu();
        }
      }
    });

    this.authService.isLoggedIn$.subscribe(data => {
      this.isLogined = data;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleGetStartedLogout() {
    if(this.isLogined) {
      this.logout();
      return;
    }
    this.router.navigate(['/login'])
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
