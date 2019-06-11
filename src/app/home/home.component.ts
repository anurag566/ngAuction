import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {Book, BooksService} from '../shared/books.service';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  books: any = [];
  constructor(private productService: ProductService, private bookService: BooksService) {}

  ngOnInit() {
    this.products = this.productService.getProduct();
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe((data: {}) => {
      console.log(data);
      this.books = data;
    });
  }

}
