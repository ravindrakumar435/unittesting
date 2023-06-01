import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  studentDetails: {name: string, result: string} ;
  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.studentDetails = this.service.studentData;
  }

}
