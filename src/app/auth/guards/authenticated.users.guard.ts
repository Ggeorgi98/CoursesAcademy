import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import AuthService from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUsersGuard {
  constructor(private authService: AuthService,
    private router: Router) {

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    debugger;
      if (!this.authService.isLoggedIn()) {
        this.router.navigateByUrl('auth/login');
      }  
     debugger;
      if (!this.authService.isAdmin()) {
        this.router.navigateByUrl('courses/list');
      }
      return true;
  }
  
  canActivate(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    debugger;
      if (!this.authService.isLoggedIn()) {
        this.router.navigateByUrl('auth/login');
      }  
     debugger;
      if (!this.authService.isAdmin()) {
        this.router.navigateByUrl('courses/list');
      }
      return true;
  }
  
}
