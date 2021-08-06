import { Injectable } from '@angular/core';
import { Book } from '../Classes/book';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpResponse,HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  endPoint = "";

  bookList: Book[] = [];
  b: Book = null;
  api="https:localhost:44317/api/Book";
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) {
  }


  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.api);
  }
  fillter(AgeCategory: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.api+"/bookListByAge/" + AgeCategory);
  }
  GetAll(AgeCategory?: string): Observable<Book[]> {
    let b: Observable<Book[]>;
    if (AgeCategory != null)
      b = this.fillter(parseInt(AgeCategory));
    else
      b = this.getBooks();
    return b;
  }
  GetBook(num: string):Observable<Book> {
    let b=this.httpClient.get<Book>(this.api+"/"+num);
    return b;
  }
   AddBook(book: any):Observable<Book> {
     book.id='0'; 
     return this.httpClient.post<any>(this.api,book);
  }
}

