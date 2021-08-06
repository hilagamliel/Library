import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../services/category-service';
import { Category } from '../Classes/category';
import { BorrowerService } from '../services/borrower-service';
import { Borrower } from '../Classes/borrower';
import { Router } from '@angular/router';
@Component({
  selector: 'app-borrower-forms',
  templateUrl: './borrower-forms.component.html',
  styleUrls: ['./borrower-forms.component.css']
})
export class BorrowerFormsComponent implements OnInit {

  constructor(private AllCategory: CategoryService, private borrowerService: BorrowerService,
    private router: Router) { }
    myForm: FormGroup = new FormGroup({
    tz: new FormControl("",[Validators.required,Validators.pattern('[0-9]*'),
    Validators.minLength(9),Validators.maxLength(9)]),
    ageCategory: new FormControl(),
    firstName: new FormControl("",Validators.required),
    lastName: new FormControl(),
    phoneNumber: new FormControl(),
    mail: new FormControl("",Validators.email)
  });
  allCategory: Category[];
  
  @Input()IfClear:boolean;
  @Output()IfClearUpdate=new EventEmitter<boolean>();

  ngOnInit(): void {
    this.AllCategory.GetAll().subscribe(data=>this.allCategory = data);
    
  }
  SubmitAdd(): void {
    this.borrowerService.AddBorrower(this.myForm.value).subscribe(()=>{
      this.router.navigate(['/borroweList']);
      this.IfClearUpdate.emit(false);

    });
    
  }
  ReasetBorrower(): void {
    this.myForm.reset();
  }
  GetErrorsTz(){
    let str:string='';
    this.myForm.controls.tz.dirty==false?str+='':
    this.myForm.controls.tz.errors==null?str+='':
    this.myForm.controls.tz.errors['required']?str+='Enter samthing':this.myForm.controls.tz.errors['minLength']==undefined&&
    this.myForm.controls.tz.errors['pattern']!=undefined?str+='Enter Please Jast Numbers':
    this.myForm.controls.tz.errors['maxLength']==undefined?str+='Enter 9':str+='';
    return str;
  }
  GetErrorsFirstName(){
    let str:string='';
    this.myForm.controls.firstName.dirty==false?str+='':
    this.myForm.controls.firstName.errors==null?str+='':
    this.myForm.controls.firstName.errors['required']?str+='Enter samthing':str+='';
    return str;
  }
}
