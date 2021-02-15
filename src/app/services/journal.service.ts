import { Injectable } from '@angular/core';
import * as journalData from './journal.json';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  public journal: any = journalData;

  constructor(private http: HttpClient) {
    console.log(this.journal);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/api/tasks');
  }
}
