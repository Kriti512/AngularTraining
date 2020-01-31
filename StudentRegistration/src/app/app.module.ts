import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddStudentReactiveComponent } from './add-student-reactive/add-student-reactive.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path:'',component: StudentDetailsComponent},
  { path:'student-details', component: StudentDetailsComponent},
  { path:'add-student', component:AddStudentComponent},
  { path:'add-student-reactive', component:AddStudentReactiveComponent},
  { path:'**', component: PagenotfoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
