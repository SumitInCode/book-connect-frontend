import { Component } from '@angular/core';
import {SearchbarComponent} from '../searchbar/searchbar.component';
import {BookCardComponent} from '../book-card/book-card.component';
import {Book, BookMinimal} from '../../models/book.model';

@Component({
  selector: 'app-library',
  imports: [
    SearchbarComponent,
    BookCardComponent
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  books: BookMinimal[] = [
    {
      id: 1,
      title: 'Pride and Prejudice',
      authorName: 'Jane Austen',
      bookCover: 'https://tmm.chicagodistributioncenter.com/IsbnImages/9780226822952.jpg',
      genre: 'Romance',
      rate: 4.8
    },
    {
      id: 2,
      title: 'Moby-Dick',
      authorName: 'Herman Melville',
      bookCover: 'https://tmm.chicagodistributioncenter.com/IsbnImages/9780226822952.jpg',
      genre: 'Adventure',
      rate: 4.5
    }
  ];
}
