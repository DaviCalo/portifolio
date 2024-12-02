import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModel } from '../../models/tag.model';

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

  @Input() tags: TagModel[] = [];

  @Input() gitUrl: String = '';
  @Input() deployUrl: String = '';
}
