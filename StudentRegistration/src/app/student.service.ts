import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from './student-details/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _url: string = "/assets/Data/studentss.json";
  constructor(private http : HttpClient) { }
  getStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this._url);
  }
}