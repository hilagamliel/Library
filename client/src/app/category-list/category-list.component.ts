import { Component, OnInit } from '@angular/core';
import { Category } from '../Classes/category';
import { CategoryService } from '../services/category-service';
import { Router } from '@angular/router';
import { BooksListComponent } from '../books-list/books-list.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categorylist:CategoryService,private router:Router) { }

  category:Category[]=[];

  ngOnInit(): void {
 this.categorylist.GetAll().subscribe(data=> this.category=data); 
  }
  str: string = "hhhh";
}


