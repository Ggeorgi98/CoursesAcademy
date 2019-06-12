import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import UserInterface from '../users/models/user.model';
import UsersService from '../users/users.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export default class AuthService {

    constructor(private http: HttpClient,
                private usersService: UsersService,
                private router: Router) {

    }

    public isLoggedIn(): boolean {
        return !!sessionStorage.getItem('loggedUser');
    }

    public getUser(): UserInterface{
        if(this.isLoggedIn()){
            return JSON.parse(sessionStorage.getItem('loggedUser'));
        }
        
        return null;
    }

    public isAdmin(): boolean{
        if(this.getUser() !== null && this.getUser().role === "Admin"){
            return true;
        }

        return false;
    }

    public login(username: string, password: string): Observable<UserInterface> {
        return new Observable((observer) => {
            this.usersService.getAllUsers()
            .subscribe((allUsers) => {
                const user = allUsers
                .find(u => u.username === username && u.password === password);

                if(user.isBlocked === true){
                    observer.error("Your account is blocked!");
                }
                if (user) {
                    sessionStorage.setItem('loggedUser', JSON.stringify(user))
                    observer.next(user);
                    observer.complete();
                } else {
                    observer.error("Incorrect username/password!");
                }
            });
        });        
    }

    public logout(){
        sessionStorage.removeItem('loggedUser');
        this.router.navigateByUrl('/auth/login');
    }
 }