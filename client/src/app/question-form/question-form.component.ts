import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { BookService } from '../services/book-service';
import { BorrowerService } from '../services/borrower-service';
import { Book } from '../Classes/book';
import { Borrower } from '../Classes/borrower';
import { Lend } from '../Classes/lend';
import { LandingsService } from '../services/landings.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  isdisabled: boolean = true;
  constructor(private formB: FormBuilder, private Books: BookService, private Borrowers: BorrowerService,
    private Lands: LandingsService, private router: Router, private rout: ActivatedRoute) {
  }

  myForm = this.formB.group({
    SelectAsks: ["", [Validators.required]],
    SelectBook: ["", Validators.required]
  });
  books: Book[];
  borrowers: Borrower[];

  ngOnInit(): void {
    this.Books.GetAll().subscribe(respons => this.books = respons);
    this.Borrowers.GetAll().subscribe(data => this.borrowers = data);
  }
  SubmitAdd() {
    // {
    //   "id": "0",
    //     "BorrowerId": "1",
    //       "BookId": "4",
    //         "LandingDate": "2000-01-10",
    //           "ReturnDate": "2000-01-10"
    // }
    // let borrower;
    // this.Borrowers.GetBorrower(this.myForm.get("SelectAsks").value).subscribe(data => borrower = data);
    // let book;
    // this.Books.GetBook(this.myForm.get("SelectBook").value).subscribe(b => book = b);
    let land = new Lend();
    land.id = '0';
    land.borrowerid = this.myForm.get("SelectAsks").value;
    land.bookid = this.myForm.get("SelectBook").value;
    land.landingDate = new Date();
    land.returnDate = new Date("2020-02-01");
    this.Lands.AddLand(land).subscribe(()=>this.router.navigate(['/lendings']));
  }

}
