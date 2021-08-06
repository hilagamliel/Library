import { Component, OnInit } from '@angular/core';
import { BorrowerService } from '../services/borrower-service';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-generalinformation',
  templateUrl: './generalinformation.component.html',
  styleUrls: ['./generalinformation.component.css']
})
export class GeneralinformationComponent implements OnInit {

  constructor(private borrowerService: BorrowerService, private bookService: BookService) { }
  countborrowers: number;
  countbooks: number;
  ngOnInit(): void {
    this.borrowerService.GetAll().subscribe(data =>this.countborrowers = data.length);
    this.bookService.GetAll().subscribe(data => this.countbooks = data.length);
  }
}
