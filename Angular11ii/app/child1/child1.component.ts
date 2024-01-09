import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  public bRet:boolean=false;
  public Ans1:string="";
  constructor(private obj:NumberService)
  {
    this.bRet=this.obj.ChkPrime(11);
    if(this.bRet==true)
    {
      this.Ans1="It is a prime number";
    }
    else
    {
      this.Ans1="It is not a Prime number";
    }
  }
}
