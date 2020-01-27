import { Component, OnInit } from '@angular/core';
import { User } from './add-student.interface';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  user: User = {
    name: 'Kritika',
    account: {
      email: '',
      confirm: ''
    },
    gender: 'Male'
  };
  
  constructor() { }

  ngOnInit() {
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }):void {
    console.log(value, valid);
  }

}
