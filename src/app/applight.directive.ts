import {  Directive, ElementRef, HostListener,Input  } from '@angular/core';

@Directive({
  selector: '[Applight]'
})
export class ApplightDirective {

  constructor(private el:ElementRef) {
  	el.nativeElement.style.backgroundColor = 'yellow';
  }
  @Input('Applight') highColor: string;
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highColor||'red');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    //console.log('我是mouseleave~');
    this.highlight(this.highColor||'yellow');
  }
 
  private highlight(color: string) {
    console.log(this.el)
    this.el.nativeElement.style.backgroundColor = color;
  }

}
