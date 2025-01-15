import { Component } from '@angular/core';
import {MatCard, MatCardImage} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-book-details',
  imports: [
    MatCard,
    MatButton,
    MatCardImage
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  book = {
    photo: 'https://i.ibb.co/60Yx1WN/Elegant-Dark-Woods-Fantasy-Photo-Book-Cover.jpg',  // Replace with actual image URL
    title: 'Angular for Beginners',
    genre: 'Programming',
    synopsis: 'A complete guide to learning Angular for beginners.',
    isbn: '123-4567890123',
    publishYear: 2021,
    author: 'John Doe'
  };
}
