import { Directive } from '@angular/core';
import { ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private ele: ElementRef) { 
    this.ele.nativeElement.style.cssText = "font-weight: bold; background: yellow; font-size: 25px";
  }

  
}
