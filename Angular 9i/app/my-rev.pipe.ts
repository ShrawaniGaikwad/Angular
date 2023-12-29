import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    var temp:string="";
    var i=0;
    var Size=value.length;
    for(i=(value.length-1);i>=0;i--)
    {
      temp=temp+value[i];
    }
    return temp;
  }

}
