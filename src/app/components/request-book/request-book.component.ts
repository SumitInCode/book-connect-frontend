import { Component } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-request-book',
  imports: [],
  templateUrl: './request-book.component.html',
  styleUrl: './request-book.component.css'
})
export class RequestBookComponent {
  showMessage: boolean = false;

  handleShowMessage(): void {
    this.showMessage = true;
    timer(2000).subscribe(() => {
      this.showMessage = false;
    });
  }

  handleBookRequest() {
    this.handleShowMessage()
  }
}
