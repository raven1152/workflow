import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sprint } from '../models/sprint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private http: HttpClient) { }

  getSprints(): Observable<Sprint[]> {
    return this.http.get<Sprint[]>('http://localhost:3000/api/sprints');
  }

  saveSprint(sprint: Sprint): Observable<Sprint> {
    console.log('sprint', sprint);
    return this.http.post<Sprint>('http://localhost:3000/api/sprints', sprint);
  }
}
