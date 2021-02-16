import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './views/task-view/task-view.component';
import { JournalViewComponent } from './components/journal-view/journal-view.component';
import { SprintsComponent } from './views/sprints/sprints.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  {
    path: 'task-view',
    component: TaskViewComponent,
  },
  {
    path: 'journal-view',
    component: JournalViewComponent,
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
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
