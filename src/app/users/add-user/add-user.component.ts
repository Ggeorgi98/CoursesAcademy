import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import UsersService from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder,
              private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute) {

    this.route.params.subscribe((params) => {
      if (params.id) {
        this.usersService.getById(params.id)
        .subscribe((user) => {
          this.createForm();

          this.userForm.patchValue({...user});
          // this.userForm.name = user.name;
          // this.userForm.password = user.paswwrod;
        });
      }
    });
    
    this.createForm();
   }

  ngOnInit() {
  }
  
  private createForm(): void {
    this.userForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(5)]],
      picture: ['https://picsum.photos/200/300', Validators.required],
      isBlocked: [false, Validators.required],
      role:['']
    });
  }

  onFormSubmit(event): void {
    this.usersService.addNewUser(this.userForm.value)
    .subscribe(() => {
      this.router.navigateByUrl('users/list');
    })
  }

  get isFormValid(): boolean {
    return this.userForm.valid;
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  get name() {
    return this.userForm.get('name');
  }

  get picture() {
    return this.userForm.get('picture');
  }

  get isBlocked() {
    return this.userForm.get('isBlocked');
  }

  get role() {
    return this.userForm.get('role');
  }
}
