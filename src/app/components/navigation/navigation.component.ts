import { Component, Input, Renderer2, ElementRef, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnChanges {
  @Input() item: number = 0;
  @Output() itemSeleted = new EventEmitter<number>;

  constructor(private renderer: Renderer2) {}

  @ViewChild('aboutmenav', { static: true }) aboutmenav!: ElementRef;
  @ViewChild('projectnav', { static: true }) projectnav!: ElementRef;
  @ViewChild('contatnav', { static: true }) contatnav!: ElementRef;

  onClickNav(intem: number): void {
    this.itemSeleted.emit(intem);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item'].currentValue == 1) {
      this.renderer.addClass(this.aboutmenav.nativeElement, 'activer');
      this.renderer.removeClass(this.projectnav.nativeElement, 'activer');
    } else if(changes['item'].currentValue == 2) {
      this.renderer.removeClass(this.aboutmenav.nativeElement, 'activer');
      this.renderer.addClass(this.projectnav.nativeElement, 'activer');
    } else if(changes['item'].currentValue == 3) {
      this.renderer.removeClass(this.contatnav.nativeElement, 'activer');
    }
  }
}
