import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Book, BookMinimalResponse} from '../models/book.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookURL = "/books"
  private http = inject(HttpClient);

  getBookById(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.bookURL}/${bookId}`);
  }

  getAllBooks(): Observable<BookMinimalResponse> {
    return this.http.get<BookMinimalResponse>(`${this.bookURL}`)
  }

}
