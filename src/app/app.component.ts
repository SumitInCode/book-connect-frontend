import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookCardComponent} from './book-card/book-card.component';
import {RequestBookComponent} from './request-book/request-book.component';
import {HomepageComponent} from './homepage/homepage.component';
import {SearchbarComponent} from './searchbar/searchbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookDetailsComponent, BookCardComponent, NavbarComponent, RequestBookComponent, HomepageComponent, SearchbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-connect-frontend';
}
