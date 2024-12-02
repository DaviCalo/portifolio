import { Component, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';
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
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'angular-portifolio';

  projects: ProjectModel[] = PROJECTS;

  filterValue: string = '';

  activerNavItem: number = 1;
  isNavigationScroll: boolean = true;

  onInputValueChange(value: string): void {
    this.filterValue = value;
  }

  @ViewChild('containerRight') containerRight!: ElementRef;
  @ViewChild('appNavigation') appNavigation!: ElementRef;

  @ViewChild('articleAboutMe') articleAboutMe!: ElementRef; 
  @ViewChild('articleProject') articleProject!: ElementRef; 

  ngAfterViewInit(): void {
    if (this.containerRight) {
      this.containerRight.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
    } else {
      console.error('containerRight is not defined');
    }
    this.onScroll();
  }

  onScroll(): void {
    console.log(this.isNavigationScroll);
    if(!this.isNavigationScroll) {
      const section1Top = this.articleAboutMe.nativeElement.offsetTop; 
      const section2Top = this.articleProject.nativeElement.offsetTop; 
      // const section3Top = this.section3.nativeElement.offsetTop; 

      const scrollPosition = this.containerRight.nativeElement.scrollTop + this.containerRight.nativeElement.clientHeight / 2;
      
      if(scrollPosition >= section1Top && scrollPosition < section2Top) {
        this.activerNavItem = 1;
      } else if(scrollPosition >= section2Top) {
        this.activerNavItem = 2;
      }
      console.log(this.activerNavItem);
    }
  }

  onClickNavItem(item: number): void {
    this.activerNavItem = item;
    console.log(this.activerNavItem + " clicked");
  }

  onMouseEnterNavigation(): void {
    this.isNavigationScroll = false;
    console.log(this.isNavigationScroll);
  }

  onMouseLeaveNavigation(): void {
    this.isNavigationScroll = true;
    console.log(this.isNavigationScroll);
  }
}
