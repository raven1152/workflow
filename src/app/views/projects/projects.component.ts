import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Sprint } from '../../models/sprint';
import { SprintService } from '../../services/sprint.service';
import * as dayjs from 'dayjs';
import { NgForm } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  project: Project = new Project();
  projects: Project[] = [];
  @ViewChild('formElement') formElement: NgForm;
  @ViewChild('projectDescriptionVar') descriptionVar: MatInput;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects()
      .subscribe(
        (projects) => {
          this.projects = projects;
          if (projects.length) {
            this.initProject(projects[projects.length - 1]);
          }
        },
        (err) => console.error(err),
        () => console.log('getProjects completed.')
      );
  }

  initProject(project?: Project) {
    this.project = new Project();
  }

  itemClick(project: Project) {
    this.project = project;
  }

  cancel() {
    this.project = new Project();
    this.formElement.resetForm();
  }

  new() {
    if (this.projects.length) {
      this.initProject(this.projects[this.projects.length - 1]);
    }
    this.formElement.resetForm();
  }

  save() {
    this.projectService.saveProject(this.project)
      .subscribe(
        (project) => {
          if (this.project.id) {
            this.initProject();
          } else {
            this.projects.push(project);
            this.project = new Project();
            this.initProject(project);
          }
        },
        (err: any) => console.error(err),
        () => console.log('save sprint complete')
      );
  }
}
