import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../Classes/book';

@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {

  
  
  transform(value: Book[], ...args: any[]): Book[]{
    let books:Book[]=[];
    let name:string=args[0];
    let i=0;
    value.forEach(element => {
      if(element.title.includes(name))
        books[i++]=element;
    });
    return books;
  }
}
