import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { PasswordValidator } from '../password.validator';

@Component({
  selector: 'app-add-student-reactive',
  templateUrl: './add-student-reactive.component.html',
  styleUrls: ['./add-student-reactive.component.css']
})
export class AddStudentReactiveComponent implements OnInit {
  // signup = new FormGroup({
  //   firstName: new FormControl('Kritika'),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   confirmEmail: new FormControl('')
  // });
  constructor(private fb: FormBuilder) { }
  signup = this.fb.group({
    firstName: ['', Validators.required],
    lastName:['',Validators.required],
    password: ['',Validators.required],
    confirmPassword: ['',Validators.required]
  }, {validator: PasswordValidator});
   
  ngOnInit() {
   
  }

}
 