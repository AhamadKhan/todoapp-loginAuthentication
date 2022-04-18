import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Ahamad';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  
  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router:Router, private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  handleLogin() {
    // if (this.username === 'Ahamad' && this.password === 'dummy') {
      if (this.hardcodedAuthenticationService.authenticate(this.username, this.password )) {
       //redirect to welcome page
       this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

  ngOnInit(): void {
  }

}
