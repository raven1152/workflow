import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './views/task-view/task-view.component';
import { JournalViewComponent } from './components/journal-view/journal-view.component';
import { SprintsComponent } from './views/sprints/sprints.component';

const routes: Routes = [
  {
    path: 'task-view',
    component: TaskViewComponent,
  },
  {
    path: '',
    redirectTo: '/journal-view',
    pathMatch: 'full',
  },
  {
    path: 'journal-view',
    component: JournalViewComponent,
  },
  {
    path: 'sprints',
    component: SprintsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
