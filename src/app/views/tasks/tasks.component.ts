import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  task: Task = new Task();
  tasks: Task[] = [];
  @ViewChild('formElement') formElement: NgForm;
  @ViewChild('projectDescriptionVar') descriptionVar: MatInput;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe(
        (tasks) => {
          this.tasks = tasks;
          if (tasks.length) {
            this.initTask(tasks[tasks.length - 1]);
          }
        },
        (err) => console.error(err),
        () => console.log('getProjects completed.')
      );
  }

  initTask(task?: Task) {
    this.task = new Task();
    if (task) {
      this.task.taskDescription = task.taskDescription;
      this.task.plannedDuration = task.plannedDuration;
      this.task.taskId = task.taskId;
    }
  }

  itemClick(task: Task) {
    this.task = task;
  }

  cancel() {
    this.task = new Task();
    this.formElement.resetForm();
  }

  new() {
    if (this.tasks.length) {
      this.initTask(this.tasks[this.tasks.length - 1]);
    }
    this.formElement.resetForm();
  }

  save() {
    this.taskService.saveTask(this.task)
      .subscribe(
        (task) => {
          if (this.task.id) {
            this.initTask();
          } else {
            this.tasks.push(task);
            this.task = new Task();
            this.initTask(task);
          }
        },
        (err: any) => console.error(err),
        () => console.log('save sprint complete')
      );
  }
}
