import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialLinksComponent } from './components/social-links-component/social-links-component.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialLinksComponent, NavigationComponent, ProjectCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angular-portifolio';
  projects: {imageUrl: string, imageDescription: string, title: string, subtitle: string, tags: string[], gitUrl: string, deployUrl: string}[] = [
    {
      imageUrl: 'images/gravitation.png',
      imageDescription: 'Imagem do projeto 1',
      title: 'The Gravity',
      subtitle: 'Mini simulação do movimento gravitacional entre a Terra e a lua. Usando a formula da gravitação universal. Apresentado como trabalho final de uma disciplina.',
      tags: ['Angular', 'Node', 'MongoDB'],
      gitUrl: 'https://github.com',
      deployUrl: 'https://deploy.com'
    },
  ]
}
