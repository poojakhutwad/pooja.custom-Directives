import { Directive, HostListener } from '@angular/core';
import { ElementRef} from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele: ElementRef) { }

  @HostListener('mouseenter') onmouseenter(){
    this.setColor('red');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.setColor('black');
  }

  setColor(color: string){
    this.ele.nativeElement.style.color = color;
  }
}
