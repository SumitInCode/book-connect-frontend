import {Component, inject, OnInit} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BookCardComponent} from '../book-card/book-card.component';
import {MatIcon} from '@angular/material/icon';
import {MatNavList} from '@angular/material/list';
import {MatButton, MatIconButton} from '@angular/material/button';
import {NgClass} from '@angular/common';
import {NavigationStart, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    BookCardComponent,
    MatSidenavModule,
    MatIcon,
    MatNavList,
    MatButton,
    MatIconButton,
    NgClass,
    MatIconButton,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  private router = inject(Router);
  isMenuOpen = false;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if(this.isMenuOpen) {
          this.toggleMenu();
        }
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getStarted() {
    this.router.navigate(['/login'])
  }
}
