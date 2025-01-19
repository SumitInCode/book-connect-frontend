import { Component } from '@angular/core';
import {BookCardComponent} from '../book-card/book-card.component';

@Component({
  selector: 'app-book-shelf',
  imports: [
    BookCardComponent
  ],
  templateUrl: './book-shelf.component.html',
  styleUrl: './book-shelf.component.css'
})
export class BookShelfComponent {

}
