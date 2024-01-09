import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  public bRet:boolean=false;
  public Ans1:string="";
  public iCount:number=0;
  constructor(private obj:NumberService,private sobj:StringService)
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
    this.iCount=sobj.CountCapital("Marvellous Infosystems");
  }

}
