import { Component, Input, Renderer2, ElementRef, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnChanges {
  @Input() item: number = 1;
  @Output() itemSeleted = new EventEmitter<number>();

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  @ViewChild('aboutmenav', { static: true }) aboutmenav!: ElementRef;
  @ViewChild('projectnav', { static: true }) projectnav!: ElementRef;
  @ViewChild('experiencenav', { static: true }) experiencenav!: ElementRef;

  onClickNav(item: number): void {
    this.itemSeleted.emit(item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item'].currentValue == 1) {
      this.renderer.addClass(this.aboutmenav.nativeElement, 'activer');
      this.renderer.removeClass(this.projectnav.nativeElement, 'activer');
      this.renderer.removeClass(this.experiencenav.nativeElement, 'activer');
    } else if (changes['item'].currentValue == 2) {
      this.renderer.removeClass(this.aboutmenav.nativeElement, 'activer');
      this.renderer.addClass(this.projectnav.nativeElement, 'activer');
      this.renderer.removeClass(this.experiencenav.nativeElement, 'activer');
    } else if (changes['item'].currentValue == 3) {
      this.renderer.removeClass(this.aboutmenav.nativeElement, 'activer');
      this.renderer.removeClass(this.projectnav.nativeElement, 'activer');
      this.renderer.addClass(this.experiencenav.nativeElement, 'activer');
    }
  }
}
