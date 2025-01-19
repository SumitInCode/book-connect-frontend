import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { derivedAsync } from 'ngxtension/derived-async';
import {Book} from '../../models/book.model';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  bookId: string | null = null;
  private route = inject(ActivatedRoute);
  private bookService= inject(BookService);
  book = derivedAsync(() => this.bookService.getBookById(1), {initialValue: {} as Book})

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('bookId');

  }
}
