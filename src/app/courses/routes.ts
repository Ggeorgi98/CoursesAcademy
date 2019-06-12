import { Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesComponent } from './courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { AuthenticatedCourseGuard } from '../auth/guards/authenticated.course.guard.guard';
import { AuthenticatedUsersGuard } from '../auth/guards/authenticated.users.guard';

export const routes: Routes = [
    {
        path: '',
        component: CoursesComponent,
        children: [
            {
                path: 'list',
                component: CoursesListComponent
            },
            {
                path: 'add',
                component: AddCourseComponent,
                canActivate: [AuthenticatedUsersGuard]
            }, 
            {
                path: 'add/:id',
                component: AddCourseComponent,
                canActivate: [AuthenticatedCourseGuard]
            }        
        ]
    }
];
