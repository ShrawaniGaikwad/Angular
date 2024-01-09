import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(iNo:number):boolean
  {
    var iSum:number=0;
    var flag=0;
    for( var i=2;i<iNo/2;i++)
    {
      if(iNo % i ==0)
      {
        flag=1;
        break;
      }
      else
      {
        flag=0;
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
}
