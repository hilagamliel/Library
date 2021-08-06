import { Injectable } from '@angular/core';
import { Category } from '../Classes/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 
  api="https://localhost:44317/api/Category";
  constructor(private httpClient: HttpClient) {
  }

  GetAll(){
    let categoryList =this.httpClient.get<Category[]>("https://localhost:44317/api/Category");
    return categoryList;
  }
  GetCategory(id:string):Observable<Category>{
   return this.httpClient.get<Category>(this.api+"/"+id);
  }
}
