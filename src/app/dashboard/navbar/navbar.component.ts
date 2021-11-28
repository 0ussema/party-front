import { Component, OnInit } from '@angular/core';
import {SallesService} from '../../service/salles.service';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

isAdmin(){
    return this.authService.isAdmin();
}

 isUser(){
    return this.authService.isUser();
}

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
}
