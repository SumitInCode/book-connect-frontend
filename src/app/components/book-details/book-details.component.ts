import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  bookId: string | null = null;
  private route = inject(ActivatedRoute);
  book: Book = {} as Book;

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
  }
}
