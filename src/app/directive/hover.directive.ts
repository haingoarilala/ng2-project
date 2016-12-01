import {Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
   @HostListener('mouseenter') onMouseEnter() {
      this.renderer.setElementStyle(this.el.nativeElement, 'height', '200px');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this. renderer.setElementStyle(this.el.nativeElement, 'height', 'initial');
  }
}
