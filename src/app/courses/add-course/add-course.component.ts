import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import CoursesService from '../courses.service';
import { Router, ActivatedRoute } from '@angular/router';
import AuthService from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private coursesService: CoursesService,
              private router: Router,
              private route: ActivatedRoute) {
                this.route.params.subscribe((params) => {
                  if (params.id) {
                    this.coursesService.getById(params.id)
                    .subscribe((course) => {
                      this.createForm();
            
                      this.courseForm.patchValue({...course});
                    });
                  }
                });

                this.createForm();
               }

  ngOnInit() {
  }

  private createForm(): void {
    this.courseForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      rating: ['', Validators.required],
      assigneeId:[[]]
    });
  }

  onFormSubmit(event): void {
    debugger;
    this.coursesService.addNewCourse(this.courseForm.value)
    .subscribe(() => {
      this.router.navigateByUrl('courses/list');
    })
  }

  get isFormValid(): boolean {
    return this.courseForm.valid;
  }

  get title() {
    return this.courseForm.get('title');
  }

  get description() {
    return this.courseForm.get('description');
  }

  get rating() {
    return this.courseForm.get('rating');
  }

  get isAdmin(): boolean{
    return this.authService.isAdmin();
  }
}
