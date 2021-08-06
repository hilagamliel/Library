import { Component, OnInit } from '@angular/core';
import { Borrower } from '../Classes/borrower';
import { BorrowerService } from '../services/borrower-service';
 

@Component({
  selector: 'app-borrower-list',
  templateUrl: './borrower-list.component.html',
  styleUrls: ['./borrower-list.component.css']
})
export class BorrowerLIstComponent implements OnInit {
  IfShow:boolean;
  borrowerList: Borrower[] = [];
  displayedColumns=[];

  constructor(private brorrwer: BorrowerService) {

  }
  ngOnInit(): void {
    this.brorrwer.GetAll().subscribe(data=> this.borrowerList = data);

    this.displayedColumns = ['id', 'tz', 'firstName', 'lastName', 'phoneNumber', 'mail'];

  }
  SetIfShow(IfShow:boolean){
    this.IfShow=IfShow;
    this.brorrwer.GetAll().subscribe(data=>this.borrowerList=data);
  }

}
