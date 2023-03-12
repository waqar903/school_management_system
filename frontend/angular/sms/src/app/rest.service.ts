import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private URL = 'http://localhost:5000/api/students';
  errorMessage: any;

  constructor(private http: HttpClient) {}

  public getStudents() {
    return this.http.get(this.URL);
  }
  public addStudents(data: any) {
    return this.http.post(this.URL, data);
  }
  public getStudent(id: number) {
    return this.http.get(this.URL + id);
  }
  public updateStudent(id: number, data: any) {
    return this.http.put(this.URL + '/' + id, data);
  }
  public deleteStudent(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }
}
