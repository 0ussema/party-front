import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor( private authService: AuthenticationService, private route: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(data ){
    this.authService.login(data).subscribe(resp => {
      console.log(data);
      const jwt = resp.headers.get('Authorization');
      this.authService.saveToken(jwt);
      if(this.isAdmin()){
        this.route.navigate(['/dashboard']);
      }else if(this.isUser()){
        this.route.navigate(['/principal']);
      }else{
        this.route.navigate(['/register'])
      }
    },err =>{

    })

}

isAdmin(){
    return this.authService.isAdmin();
}

isUser(){
    return this.authService.isUser();
}







}
