import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  iAdd:number=0;
  iSub:number=0;
  constructor(private obj:ArithmeticService)
  {
    this.iAdd=this.obj.Add(11,21);
    this.iSub=this.obj.Sub(21,11);
  }

}
