import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private journalService: JournalService) {}

  ngOnInit(): void {
    this.journalService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  getJsonString(task: Task): string {
    return JSON.stringify(task, null, 2);
  }
}
