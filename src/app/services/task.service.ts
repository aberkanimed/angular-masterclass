import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from 'src/app/Task';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl: string = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  delete(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.baseUrl}/${task.id}`);
  }

  update(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${task.id}`, task, httpOptions);
  }

  save(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task, httpOptions);
  }
}
