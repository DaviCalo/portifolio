import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() imageUrl: String = '';
  @Input() imageDescrepiton: String = '';

  @Input() title: String = '';
  @Input() subtitle: String = '';

  @Input() tags: String[] = [];

  @Input() gitUrl: String = '';
  @Input() deployUrl: String = '';
}
