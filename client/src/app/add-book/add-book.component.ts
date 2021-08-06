import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category-service';
import { Category } from '../Classes/category';
import { Book } from '../Classes/book';
import { BookService } from '../services/book-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  categories:Category[]=[];
  book:Book;
  constructor(private Category:CategoryService,private books:BookService,  private router: Router) { }

  ngOnInit(): void {
   this.Category.GetAll().subscribe(data=> this.categories=data);
    this.book=new Book();
  }
  SubmitAdd(){
    this.book.ageCategory=parseInt(this.book.ageCategory.toString());
    this.books.AddBook(this.book).subscribe(()=>{ this.router.navigate(['bookList']);});
   
  }
}
