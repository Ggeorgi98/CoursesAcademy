import { Component, OnInit } from '@angular/core';
import AuthService from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  
  get isAdmin(): boolean{
    return this.authService.isAdmin();
  }

  get isLogged(): boolean{
    return this.authService.isLoggedIn();
  }

  onLogOutClick(){
    this.authService.logout();
  }
}

