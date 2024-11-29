import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialLinksComponent } from './components/social-links-component/social-links-component.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SwitchProjectsComponent } from './components/switch-projects/switch-projects.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProjectModel } from './models/project.model';
import { PROJECTS } from './data/projects.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, SocialLinksComponent, 
    NavigationComponent, ProjectCardComponent, 
    CommonModule, SwitchProjectsComponent,
    FilterPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angular-portifolio';

  projects: ProjectModel[] = PROJECTS;

  filterValue: string = '';

  onInputValueChange(value: string): void {
    this.filterValue = value;
  }
}
