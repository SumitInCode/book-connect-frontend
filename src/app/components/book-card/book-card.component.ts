import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Book, BookMinimal} from '../../models/book.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [
    MatCardModule,
    RouterLink
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input() books: BookMinimal[] = [];
}
