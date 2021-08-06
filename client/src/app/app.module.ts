import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyClassComponent } from './MyComp/myfirst.component';
import { CliComponent } from './cli/cli.component';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondCliComponent } from './second-cli/second-cli.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { BorrowerLIstComponent } from './borrower-list/borrower-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksListComponent } from './books-list/books-list.component';
import { ShortNamePipe } from './Pipes/short-name.pipe';
import { SearchBookPipe } from './Pipes/search-book.pipe';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LendingsComponent } from './lendings/lendings.component';
import { Error404Component } from './error404/error404.component';
import { AboutComponent } from './about/about.component';
import { GeneralinformationComponent } from './generalinformation/generalinformation.component';
import { RulesandproceduresComponent } from './rulesandprocedures/rulesandprocedures.component';
import { ContactinformationComponent } from './contactinformation/contactinformation.component';
import { BorrowerFormsComponent } from './borrower-forms/borrower-forms.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ManagementComponent } from './management/management.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ShowCategoryParentComponent } from './show-category-parent/show-category-parent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { allIcons } from 'ngx-bootstrap-icons';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';







@NgModule({
  declarations: [
    AppComponent,
    MyClassComponent,
    CliComponent,
    TaskComponent,
    SecondCliComponent,
    CategoryListComponent,
    BorrowerLIstComponent,
    BookDetailsComponent,
    BooksListComponent,
    ShortNamePipe,
    SearchBookPipe,
    MenuComponent,
    LendingsComponent,
    Error404Component,
    AboutComponent,
    GeneralinformationComponent,
    RulesandproceduresComponent,
    ContactinformationComponent,
    BorrowerFormsComponent,
    QuestionFormComponent,
    ManagementComponent,
    AddBookComponent,
    ShowCategoryParentComponent

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule ,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    MatTabsModule,
    MatSlideToggleModule,
    NgbModalModule,
    NgxBootstrapIconsModule.pick(allIcons),
    MatListModule,
    HttpClientModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
