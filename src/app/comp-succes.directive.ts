import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompSucces]'
})
export class CompSuccesDirective {

  constructor(private ele: ElementRef) { }

  @HostListener('mouseenter') onmouseenter(){
    this.setColor('green');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.setColor('black');
  }

  setColor(color: string){
    this.ele.nativeElement.style.color = color;
  }
}
