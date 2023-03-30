import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  getTask(): Observable<Task[]> {
    //this will return the data from the Json database
    return this.http.get<Task[]>(this.apiURL);
  }

  //This will delete the task
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  //keeping an update function

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url, task, HttpOptions);
  }

  //add function
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL, task, HttpOptions);
  }
}
