import { Component, OnInit } from '@angular/core';
import { LandingsService } from '../services/landings.service';
import { Lend } from '../Classes/lend';

@Component({
  selector: 'app-lendings',
  templateUrl: './lendings.component.html',
  styleUrls: ['./lendings.component.css']
})
export class LendingsComponent implements OnInit {

  AllLandings:Lend[]=[];
  constructor(private Landing:LandingsService) { 
    this.Landing.GetAllLanding().subscribe(data=>this.AllLandings=data);

  }

  ngOnInit(): void {
  }
  IsTrueReturn(date:Date):boolean{
    var count:number=new Date().getTime()-date.getTime();
    var diffDays = Math.ceil(count / (1000 * 3600 * 24));
    return diffDays>30;
  }

}
