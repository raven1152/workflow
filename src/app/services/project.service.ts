import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:3000/api/projects');
  }

  saveProject(project: Project): Observable<Project> {
    console.log('project', project);
    return this.http.post<Project>('http://localhost:3000/api/projects', project);
  }
}
