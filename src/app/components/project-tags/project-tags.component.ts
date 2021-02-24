import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

export class ProjectChip {
  constructor(project: Project) {
    this.description = project.projectDescription.substr(0, 27) + '...';
    this.projectCode = project.projectCode;
    // this.projectCode = '...' + project.projectCode.substr(13);
  }

  description: string;
  projectCode: string;
}


@Component({
  selector: 'app-project-tags',
  templateUrl: './project-tags.component.html',
  styleUrls: ['./project-tags.component.scss']
})
export class ProjectTagsComponent implements OnInit {
  chips: ProjectChip[];
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects()
    .subscribe(
      (projects) => {
        this.projects = projects;
        this.chips = this.transformProjects();
      },
      (err) => console.log(err),
      () => console.log('getProjects() completed')
    );
  }

  transformProjects(): ProjectChip[] {
    const chips: ProjectChip[] = [];
    this.projects.forEach(project => {
      chips.push(new ProjectChip(project));
    });
    return chips;
  }

  drop(event: CdkDragDrop<ProjectChip[]>) {
    moveItemInArray(this.chips, event.previousIndex, event.currentIndex);
  }
}
