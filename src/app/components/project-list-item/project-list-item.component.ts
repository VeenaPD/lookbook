import { Component, Input } from '@angular/core';
import { Project } from 'src/app/core/interfaces/project.interface';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent {
  @Input('projectItem') projectItem: Project = {
    id: 0,
    image: '',
    name: '',
    shortDescription: '',
    url: '',
    status: '',
  };
}
