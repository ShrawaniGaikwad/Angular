import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value:number,Param:string): string {
    if(Param=="Prime")
    {
      var flag=0;
      for(var i=2;i<=value/2;i++)
      {
        if(value % i ==0)
        {
          flag=1;
          break;
        }
      }
      if(flag==0)
      {
        return "It is Prime Number";
      }
      else
      {
        return "It is Not a Prime Number";
      }
    }
    if(Param=="Perfect")
    {
      var iSum=0;
      for(var i=1;i<=value/2;i++)
      {
        if(value % i ==0)
        {
          iSum=iSum+i;
        }
      }
      if(iSum == value)
      {
        return "It is Perfect Number";
      }
      else
      {
        return "It is Not a Perfect Number";
      }
    }
    if(Param=="Even")
    {
      if(value % 2==0)
      {
        return "It is Even Number";
      }
      else
      {
        return "It is Not Even Number";
      }
    }
    if(Param=="Odd")
    {
      if(value%2!=0)
      {
        return "It is Odd number";
      }
      else
      {
        return "It is Not Odd Number";
      }
    }
    else
    {
      return "";
    }
  }

}
