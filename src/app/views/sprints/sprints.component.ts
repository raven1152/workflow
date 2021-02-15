import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Sprint } from '../../models/sprint';
import { SprintService } from '../../services/sprint.service';
import * as dayjs from 'dayjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.scss']
})
export class SprintsComponent implements OnInit {
  sprint: Sprint = new Sprint();
  sprints: Sprint[] = [];
  @ViewChild('formElement') formElement: NgForm;

  constructor(private sprintService: SprintService) {}

  ngOnInit(): void {
    this.sprintService.getSprints()
      .subscribe(
        (sprints) => {
          this.sprints = sprints;
          if (sprints.length) {
            this.initSprint(sprints[sprints.length - 1]);
          }
        },
        (err) => console.error(err),
        () => console.log('getSprints completed.')
      );
  }

  fixEndpoints() {
    const from = dayjs(this.sprint.fromDate)
      .startOf('day');
    const to = dayjs(this.sprint.toDate)
      .startOf('day');
    this.sprint.fromDate = from.toDate();
    this.sprint.toDate = to.toDate();
  }

  initSprint(sprint?: Sprint) {
    this.sprint = new Sprint();
    if (sprint) {
      this.sprint.description = sprint.description;
      this.sprint.fromDate = sprint.toDate;
      this.sprint.toDate = dayjs(sprint.toDate).add(2, 'weeks').toDate();
    }
  }

  itemClick(sprint: Sprint) {
    this.sprint = sprint;
  }

  calcDays(sprint: Sprint): number {
    const from = dayjs(sprint.fromDate);
    const to = dayjs(sprint.toDate);
    return to.diff(from, 'days');
  }

  cancel() {
    this.sprint = new Sprint();
    this.formElement.resetForm();
  }

  save() {
    this.fixEndpoints();
    this.sprintService.saveSprint(this.sprint)
      .subscribe(
        (sprint) => {
          if (this.sprint.hasOwnProperty('id') && (this.sprint as any).id) {
            this.initSprint();
          } else {
            this.sprints.push(sprint);
            this.sprint = new Sprint();
            this.initSprint(sprint);
          }
        },
        (err: any) => console.error(err),
        () => console.log('save sprint complete')
      );
  }
}
