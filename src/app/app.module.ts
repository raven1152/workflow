import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JournalEntriesComponent } from './components/journal-entries/journal-entries.component';
import { ProjectsTasksComponent } from './components/projects-tasks/projects-tasks.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { TaskViewComponent } from './views/task-view/task-view.component';
import { SprintsComponent } from './views/sprints/sprints.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ProjectsComponent } from './views/projects/projects.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { JournalViewComponent } from './views/journal-view/journal-view.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    JournalViewComponent,
    JournalEntriesComponent,
    ProjectsTasksComponent,
    AuthButtonComponent,
    TaskViewComponent,
    SprintsComponent,
    ProjectsComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
