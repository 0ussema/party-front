import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private authService: AuthenticationService , private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data){
    this.authService.register(data).subscribe(resp => {
      console.log(data);
      this.router.navigate(['login']);

      },err => {

    })

  }

}
