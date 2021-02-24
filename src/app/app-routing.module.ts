import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './views/task-view/task-view.component';
import { JournalViewComponent } from './views/journal-view/journal-view.component';
import { SprintsComponent } from './views/sprints/sprints.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { ProjectTagsComponent } from './components/project-tags/project-tags.component';

const routes: Routes = [
  {
    path: 'project-tags',
    component: ProjectTagsComponent,
  },
  {
    path: 'journal-view',
    component: JournalViewComponent,
  },
  {
    path: 'task-view',
    component: TaskViewComponent,
  },
  {
    path: 'sprints',
    component: SprintsComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: '',
    redirectTo: '/project-tags',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
