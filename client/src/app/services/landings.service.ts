import { Injectable } from '@angular/core';
import { Lend } from '../Classes/lend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingsService {

  api="https:localhost:44317/api/Lend";

  Landings: Lend[] = [];
  constructor(private httpClient: HttpClient) {
    // this.Landings.push(new Lend("000", "1212", "hila", "gamliel", "4456454", "hashavua haacharon", new Date("16,January, 2021"), null));
    // this.Landings.push(new Lend("111", "2323", "tamar", "palti", "12345", "klub mekesef", new Date("15,June,  2015"), null));
    // this.Landings.push(new Lend("222", "3434", "michal", "katan", "12346", "gzar din", new Date(), null));
    // this.Landings.push(new Lend("333", "1212", "hila", "gamliel", "12347", "neshek sodi", new Date(), new Date()));
  }
  GetAllLanding():Observable<Lend[]> {
    return this.httpClient.get<Lend[]>(this.api);
  }
  AddLand(land: Lend):Observable<Lend> {
    debugger;
    return this.httpClient.post<any>(this.api,land);
  }
}
