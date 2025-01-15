import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-book-card',
  imports: [
    MatCardModule
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  items = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]
}
