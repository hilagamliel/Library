import { Component, OnInit, Input, Output } from '@angular/core';
import { Category } from '../Classes/category';

@Component({
  selector: 'app-show-category-parent',
  templateUrl: './show-category-parent.component.html',
  styleUrls: ['./show-category-parent.component.css']
})
export class ShowCategoryParentComponent implements OnInit {

  constructor() { }
  @Input() ParentName:Category;
  ngOnInit(): void {
  }

}
