import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

student;
students: any = [];
ageFilter;

  constructor() {

    this.student = {
      name: '',
      lastname: '',
      age: ''
    };

    this.students = [
      {
        name: 'A',
        lastname: 'A',
        age: '20'
      },
      {
        name: 'B',
        lastname: 'B',
        age: '30'
      },
      {
        name: 'C',
        lastname: 'C',
        age: '40'
      },
      {
        name: 'D',
        lastname: 'D',
        age: '50'
      },
      {
        name: 'E',
        lastname: 'E',
        age: '60'
      },
      {
        name: 'E',
        lastname: 'E',
        age: '70'
      }
      ];

      this.ageFilter = 40;
  }

  onSave(event: MouseEvent): void {
    console.log(this.student);
    this.students.push(this.student);
  }

}
