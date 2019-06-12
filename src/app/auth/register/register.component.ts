import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import UsersService from 'src/app/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService,
              private router: Router ) {                                
                this.createForm();
              }

  ngOnInit() {
  }

  private createForm(): void {
    this.registerForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(5)]],
      picture: ['https://picsum.photos/200/300', Validators.required],
      isBlocked: [false]
    });
  }

  onFormSubmit(event): void {
    console.log(this.registerForm);

    this.usersService.getAllUsers()
      .subscribe((users) => {
        const username = this.registerForm.value.username.toLowerCase();
        if(users.find(x=>x.username.toLowerCase() === username))
        {
          return;
        }
               
        this.usersService.addNewUser(this.registerForm.value)
        .subscribe(() => {
          this.router.navigateByUrl('auth/login');
        });
    });    
  }

  get isFormValid(): boolean {
    return this.registerForm.valid;
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get name() {
    return this.registerForm.get('name');
  }

  get picture() {
    return this.registerForm.get('picture');
  }
}
