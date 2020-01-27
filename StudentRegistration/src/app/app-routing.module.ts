import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddStudentReactiveComponent } from './add-student-reactive/add-student-reactive.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
    { path:'',component: StudentDetailsComponent},
    { path:'student-details', component: StudentDetailsComponent},
    { path:'add-student', component:AddStudentComponent},
    { path:'add-student-reactive', component:AddStudentReactiveComponent},
    { path:'**', component: PagenotfoundComponent}
];

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentDetailsComponent, 
    AddStudentComponent, 
    AddStudentReactiveComponent,
    PagenotfoundComponent]