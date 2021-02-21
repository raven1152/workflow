import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/api/tasks');
  }

  saveTask(task: Task): Observable<Task> {
    console.log('task', task);
    return this.http.post<Task>('http://localhost:3000/api/tasks', task);
  }
}
