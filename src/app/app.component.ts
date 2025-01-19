import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {BookCardComponent} from './components/book-card/book-card.component';
import {RequestBookComponent} from './components/request-book/request-book.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {SearchbarComponent} from './components/searchbar/searchbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookDetailsComponent, BookCardComponent, NavbarComponent, RequestBookComponent, HomepageComponent, SearchbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-connect-frontend';
}
