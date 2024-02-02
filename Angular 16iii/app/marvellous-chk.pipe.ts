import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, Chk:String): unknown {
    if(Chk=="Prime")
    {
      var flag=0;
      for(var i=2;i<value/2;i++)
      {
        if(value % i ==0)
        {
          flag=1;
          break;
        }
      }
      if(flag==0)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else if(Chk == "Perfect")
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
        return true;
      }
      else
      {
        return false;
      }
    }
    else if(Chk == "Even")
    {
      if(value % 2 ==0)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else if(Chk == "Odd")
    {
      if(value % 2!=0)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else
    {
      return "Invalid Chk";
    }
  }

}
