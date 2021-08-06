import { Component, OnInit } from '@angular/core';
import { Book } from '../Classes/book'
import { BookService } from '../services/book-service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category-service';
import { Category } from '../Classes/category';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {


  constructor(private BookList: BookService, private activatedRoute: ActivatedRoute, private category: CategoryService) { }
  book: Book;
  Category: Category;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.BookList.GetBook(params.code).subscribe(b =>{ this.book = b;}));
  }
  GetCategory(id: number) {
    this.category.GetCategory(id.toString()).subscribe(data => this.Category = data);
    return this.Category;
  }
}
