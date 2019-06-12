import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { AuthenticatedUsersGuard } from '../auth/guards/authenticated.users.guard';

export const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: 'list',
                component: UsersListComponent,
                canActivate: [AuthenticatedUsersGuard]
            },
            {
                path: 'add',
                component: AddUserComponent,
                canActivate: [AuthenticatedUsersGuard]
            }, 
            {
                path: 'add/:id',
                component: AddUserComponent,
                canActivate: [AuthenticatedUsersGuard]
            }
        ]
    }
];
