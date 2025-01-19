import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {LibraryComponent} from './components/library/library.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {RequestBookComponent} from './components/request-book/request-book.component';
import {BookShelfComponent} from './components/book-shelf/book-shelf.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'book/:id', component: BookDetailsComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'request-book', component: RequestBookComponent},
  {path: 'shelf', component: BookShelfComponent},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
];
