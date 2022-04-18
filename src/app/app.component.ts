import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Humana';
  softBooks:any;
  constructor(private bookService:BookService) {}
  ngOnInit() {
    this.getSoftBooks();
  }
  getSoftBooks() {
    this.bookService.getBooksFromStore().subscribe(books=>this.softBooks = books);
  }
}
