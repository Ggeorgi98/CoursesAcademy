import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import CourseModel from './models/course.model';

@Injectable({
  providedIn: 'root'
})
export default class CoursesService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>('http://localhost:3000/courses');
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/courses/' + id);
  }

  addNewCourse(course: CourseModel): Observable<any> {
    if (course.id) {
      return this.http.put(`http://localhost:3000/courses/${course.id}`, course)
    }
    return this.http.post('http://localhost:3000/courses', course)
  }

  getById(id: number): Observable<CourseModel> {
    return this.http.get<CourseModel>(`http://localhost:3000/courses/${id}`);
  }

  public joinCourse(course: CourseModel): Observable<any> {
    return this.http.put(`http://localhost:3000/courses/${course.id}`, course);
  }
}
