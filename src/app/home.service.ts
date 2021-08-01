import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public registerurl="http://localhost:3000/api/register";
  public loginUrl="http://localhost:3000/api/login";
  public specialUrl="http://localhost:3000/api/special";
  
 

  constructor(public http: HttpClient, public route:Router) { }

  registeruser(user){
    return this.http.post<any>(this.registerurl,user).subscribe(
      res=> {
        console.log(res)
        localStorage.setItem('token',res.token)
      },
      err=>console.log(err)
    )
  }

  login(user){
    return this.http.post<any>(this.loginUrl,user).subscribe(
      res=> {
        console.log(res)
        localStorage.setItem('token',res.token)
      },
      err=> console.log(err),
    )
  }
  getspecial(){
    return this.http.get<any>(this.specialUrl)
     
  }

  loggedin(){
    return !!localStorage.getItem('token')
  }

  logoutuser(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }

  getToken(){
    return localStorage.getItem('token')
  }
}