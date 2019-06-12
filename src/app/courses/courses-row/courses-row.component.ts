import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import CourseModel from '../models/course.model';
import { Router } from '@angular/router';
import AuthService from 'src/app/auth/auth.service';
import CoursesService from '../courses.service';
import UsersService from 'src/app/users/users.service';

@Component({
  selector: 'app-courses-row',
  templateUrl: './courses-row.component.html',
  styleUrls: ['./courses-row.component.css']
})
export class CoursesRowComponent implements OnInit {

  @Input() course: CourseModel;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router,
              private authService: AuthService,
              private coursesService: CoursesService,
              private usersService: UsersService) { }

  ngOnInit() {
  }

  onDeleteClicked() {
    this.onDelete.emit(this.course.id);
  }
  
  onJoinClick() {
    debugger;
    const userId = this.authService.getUser().id;
    if(this.course.assigneeId === undefined){
      this.course.assigneeId = [];
    }

    if(this.course.assigneeId.includes(userId)){
      console.log("asfasdfasd");
      return;
    }
    this.course.assigneeId.push(userId);

    this.coursesService.joinCourse(this.course).subscribe(() => {
    });
  }  

  onLeaveClick() {
    debugger;
    const userId = this.authService.getUser().id;
   
    if(!this.course.assigneeId.includes(userId)){
      console.log("asfasdfasd");
      return;
    }
    const index: number = this.course.assigneeId.indexOf(userId);
    this.course.assigneeId.splice(index, 1);

    this.coursesService.joinCourse(this.course).subscribe(() => {
    });
  }  

  get isAdmin(): boolean{
    return this.authService.isAdmin();
  }
  
  get isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }

  get notJoined(): boolean{
    const userId = this.authService.getUser().id;
    if(this.course.assigneeId.includes(userId)){
      return false;
    }

    return true;
  }
// get assignedUser(): string{
//   if(this.course.assigneeId !== null){
//     const userId = this.course.assigneeId;
//     this.usersService.getById(userId).subscribe(user =>{
//       return user.name;
//     });
//   }
//   return "";
// }

  onCourseEdit() {
    this.router.navigate(['courses/add', this.course.id]);
  }  
}
