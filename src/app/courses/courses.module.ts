import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesRowComponent } from './courses-row/courses-row.component';
import { CoursesComponent } from './courses.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AddCourseComponent } from './add-course/add-course.component';

@NgModule({
  declarations: [CoursesListComponent, CoursesRowComponent, CoursesComponent, AddCourseComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CoursesModule { }
