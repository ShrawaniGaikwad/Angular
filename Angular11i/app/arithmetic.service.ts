import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  Add(iNo1:number,iNo2:number)
  {
    return iNo1+iNo2;
  }

  Sub(iNo1:number,iNo2:number)
  {
    return iNo1-iNo2;
  }
}
