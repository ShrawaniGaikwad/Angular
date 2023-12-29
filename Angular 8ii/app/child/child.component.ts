import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() public obj=new EventEmitter();
  public SendMessage()
  {
    this.obj.emit("Hello From Child");
  }

  @Input() public Message:any;
}
