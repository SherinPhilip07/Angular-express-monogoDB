import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public homeser:HomeService, private router:Router) { }

  ngOnInit(): void {
  }
  login(user){
    this.homeser.login(user)
    this.router.navigate(['/special'])
  }

}
