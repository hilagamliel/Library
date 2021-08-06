import { Injectable } from '@angular/core';
import { Borrower } from '../Classes/borrower';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BorrowerService {
  borrowerList: Borrower[] = [];
  api = "https://localhost:44317/api/Borrower";

  constructor(private httpClient: HttpClient) {
  }
  GetAll(): Observable<Borrower[]> {
    return this.httpClient.get<Borrower[]>(this.api);
  }
  GetBorrower(tz: string) {
    return this.httpClient.get<Borrower>(this.api + "/" + tz);
  }
  AddBorrower(borrower: Borrower): Observable<Borrower> {
    borrower.id = '0';
    return this.httpClient.post<any>(this.api, borrower);
  }
}
