import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Horaot: string="התחל מהעמוד הראשון";
  Mark:number=9;
  myname:string;
  Queschense:string[]=["1+1","2+2","3+3","4+4"];
  finalMark():number{
    return this.Mark*10;
  }
  nameOfTest:string;
  myplaceolder:string="הכנס שם:";
  Click():void{
    if(this.finalMark()>=70)
        alert("התלמיד : "+this.myname+" עבר הצלחה")
        else
        alert("התלמיד : "+this.myname+" נכשל ")

  }
  color:string="blue";
  funcname():boolean{
    if(this.myname)
       return true;
    return false;
  }
}
