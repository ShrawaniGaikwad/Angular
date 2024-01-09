import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  public iCount:number=0;
  constructor(private obj:StringService)
  {
    this.iCount=obj.CountCapital("Marvellous Infosystems");
  }
}
