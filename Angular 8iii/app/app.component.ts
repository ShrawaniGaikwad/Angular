import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment8iii';
  public MyString="";
  public NewString="";
  public Length()
  {
    return this.MyString.length;
  }
  public fun(No:any)
  {
    this.NewString=No;
  }
  public NewLength()
  {
    return this.NewString.length;
  }
}
