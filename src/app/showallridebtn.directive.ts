import { Directive, ElementRef, HostListener, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appShowallridebtn]'
})
export class ShowallridebtnDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.color = this.defaultColor;
  }


  @Input() defaultColor;
  @Input() highlight: string= 'grey';

  @HostBinding('style.color') color:string = this.defaultColor;


  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#DBF3FA');

    this.color=this.highlight;
  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.color=this.defaultColor;
  }

}
