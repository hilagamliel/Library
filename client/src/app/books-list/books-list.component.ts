import { Component, OnInit } from '@angular/core';
import { Book } from '../Classes/book'
import { BookService } from '../services/book-service';
import { ActivatedRoute } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  
  textSearch: string = "";
  bookList: Book[] = [];
  displayedColumns=[];

  constructor(private http: HttpClient,private bookListService: BookService, private router: ActivatedRoute,private modalService: NgbModal) {

  }
  ngOnInit(): void {
    this.displayedColumns = ['detiles', 'id', 'title', 'author'];
    // this.bookListService.getBooks();
    this.router.params.subscribe(p => this.bookListService.GetAll(p.name).subscribe(respons=>this.bookList=respons));

  } 
  open(content) {
    this.modalService.open(content);
  }
}
