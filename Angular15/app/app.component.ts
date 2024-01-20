import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule,NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[FormBuilder,Validators]
})
export class AppComponent {
  constructor(private fobj:FormBuilder)
  {

  }
  MyForm=this.fobj.group(
    {
      FirstName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      LastName:[''],
      Email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Phone:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]],
      City:['',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z]*')]],
      State:['',Validators.required],
      ZIPCode:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(6),Validators.minLength(6)]],
      Comments:['',[Validators.required,Validators.minLength(30)]]

    }
  )
}
