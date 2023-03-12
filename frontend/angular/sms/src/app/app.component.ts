import { RestService } from './rest.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public allStdents: any;
  constructor(private rest: RestService) {
    this.getStudents();
  }

  public getStudents() {
    this.rest.getStudents().subscribe((res) => {
      console.log(res);
      this.allStdents = res;
    });
  }
  public update(id: number) {
    this.rest
      .updateStudent(id, { name: 'wicky22', age: '14' })
      .subscribe((res) => {
        this.getStudents();
      });
  }
  public add() {
    this.rest.addStudents({ name: 'wicky2', age: '14' }).subscribe((res) => {
      this.getStudents();
    });
    // this.getStudents();
  }
  public delete(id: number) {
    this.rest.deleteStudent(id).subscribe((res) => {
      //Response//
    });
  }
}
