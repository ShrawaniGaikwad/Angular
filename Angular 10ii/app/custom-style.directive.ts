import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private obj:ElementRef) 
  { 
    this.obj.nativeElement.style.fontWeight="bold";
    this.obj.nativeElement.style.background="yellow";
    
  }
}
