import { HomeService } from './../home.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:{email:"",password:""};

  constructor(private router:Router, public home:HomeService) { }

  ngOnInit(): void {
  }
  // registeruser(form:NgForm){
  //  this.home.registeruser(this.register)
  //  .subscribe(
  //    res=>console.log(res),
  //    err=>console.log(err)
  //  )
  //   }
    
  registeruser(user){
    this.home.registeruser(user)
    this.router.navigate(['/special'])
    
  }



}
