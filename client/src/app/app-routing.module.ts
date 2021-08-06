import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { ContactinformationComponent } from './contactinformation/contactinformation.component';
import { RulesandproceduresComponent } from './rulesandprocedures/rulesandprocedures.component';
import { GeneralinformationComponent } from './generalinformation/generalinformation.component';
import { AboutComponent } from './about/about.component';
import { LendingsComponent } from './lendings/lendings.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BorrowerLIstComponent } from './borrower-list/borrower-list.component';
import { BorrowerFormsComponent } from './borrower-forms/borrower-forms.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ManagementComponent } from './management/management.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [{
  path: '',
  component: BorrowerLIstComponent
}, {
  path: 'borroweList',
  component: BorrowerLIstComponent
}, {
  path: 'bookList',
  component: BooksListComponent,
  children: [{
    path: 'bookDetailsComponent/:code',
    component: BookDetailsComponent
  }
  ]
}, {
  path: 'bookList/:name',
  component: BooksListComponent,
  children: [{
    path: 'bookDetailsComponent/:code',
    component: BookDetailsComponent
  }
  ]
},
{
  path: 'bookList/:name',
  component: BooksListComponent
},
//  {
//   path: 'bookDetailsComponent/:code',
//   component: BookDetailsComponent
// },
{
  path: 'lendings',
  component: LendingsComponent
},
{
  path: 'about',
  // component: AboutComponent,
  children: [{
    path: '',
    component: GeneralinformationComponent
  }, {
    path: 'generalinformation',
    component: GeneralinformationComponent
  }, {
    path: 'rulesandprocedures',
    component: RulesandproceduresComponent
  }, {
    path: 'contactinformation',
    component: ContactinformationComponent
  }]
}, {
  path: 'management',
  // component: ManagementComponent,
  children: [{
    path: '',
    component: BorrowerFormsComponent
  }, {

    path: 'formborrower',
    component: BorrowerFormsComponent
  },
  {
    path: 'formAddland',
    component: QuestionFormComponent
  }, {
    path: 'AddBook',
    component: AddBookComponent
  }, {
    path: 'formAddland/:IsDisabled',
    component: QuestionFormComponent
  }]
},
{
  path: '**',
  component: Error404Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
