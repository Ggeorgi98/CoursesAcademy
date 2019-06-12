import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CoursesService from '../courses.service';
import CoursesModel from '../models/course.model';
import AuthService from 'src/app/auth/auth.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: CoursesModel[] = [];
  constructor(private coursesService: CoursesService,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.coursesService.getAllCourses().subscribe((response) => {
      this.courses = response;
    });
  }

  onAddCourse(): void {
    this.router.navigateByUrl('/courses/add');
  }

  onItemDeleted(id: number): void {
    const index = this.courses.findIndex(u => u.id === id);
    if (index !== -1) {
      this.courses.splice(index, 1);
      this.coursesService.deleteCourse(id).subscribe(() => {
      });
    }    
  }  

  get isAdmin(): boolean{
    return this.authService.isAdmin();
  }
}


