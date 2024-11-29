import { Pipe, PipeTransform } from '@angular/core';
import { ProjectModel } from '../models/project.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: ProjectModel[], searchText: string): ProjectModel[] {
    if (!items) return [];
    if (!searchText || searchText=="ALL") return items;
    return items.filter( 
        it => {
            return it.type.includes(searchText) 
        }
    );
  }
}
