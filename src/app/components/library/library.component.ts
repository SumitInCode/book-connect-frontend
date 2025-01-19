import { Component } from '@angular/core';
import {SearchbarComponent} from '../searchbar/searchbar.component';
import {BookCardComponent} from '../book-card/book-card.component';
import {Book} from '../../models/book.model';

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
  books: Book[] = [
    {
      id: 1,
      title: 'Pride and Prejudice',
      authorName: 'Jane Austen',
      isbn: '9780141199078',
      synopsis: `A classic novel of manners that explores the themes of love, marriage, and social standing in 19th-century England.`,
      bookCover: 'https://tmm.chicagodistributioncenter.com/IsbnImages/9780226822952.jpg',
      genre: 'Romance',
      archived: false,
      shareable: true,
      rate: 4.8
    },
    {
      id: 2,
      title: 'Moby-Dick',
      authorName: 'Herman Melville',
      isbn: '9780142437247',
      synopsis: `The epic tale of Captain Ahab's obsessive quest to seek revenge on the white whale Moby Dick.`,
      bookCover: 'https://tmm.chicagodistributioncenter.com/IsbnImages/9780226822952.jpg',
      genre: 'Adventure',
      archived: false,
      shareable: true,
      rate: 4.5
    }
  ];
}
