import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {

 
  
  
  transform(value: string, ...args: unknown[]): string {
    let  str: String[];
    let  name: string;
    let i: number;
    str = value.split(' ');
    name="";
    name=str[0].toString();
    if (str.length > 1) {
      for (i = 1; i < str.length; i++)
        name+=(' ' + str[i][0]);
      name+='.';
    }
    return name;
  }

}
