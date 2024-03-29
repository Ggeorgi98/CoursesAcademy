import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
