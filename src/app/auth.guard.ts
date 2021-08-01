import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, public home:HomeService) { }

  canActivate(): boolean{
    if (this.home.loggedin()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
  
  }
  

