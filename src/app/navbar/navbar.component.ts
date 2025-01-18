import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BookCardComponent} from '../book-card/book-card.component';
import {MatIcon} from '@angular/material/icon';
import {MatNavList} from '@angular/material/list';
import {MatButton, MatIconButton} from '@angular/material/button';
import {NgClass} from '@angular/common';

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
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
