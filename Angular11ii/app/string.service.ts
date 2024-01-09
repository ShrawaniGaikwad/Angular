import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  CountCapital(str:string)
  {
    var i=0;
    var iCnt=0;
    for(var i=0;i<str.length;i++)
    {
      if(str[i]>='A' && str[i]<='Z')
      {
        iCnt++;
      }
    }
    return iCnt;
  }
}
