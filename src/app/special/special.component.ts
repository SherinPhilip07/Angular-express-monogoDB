import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  specialevent=[]
  

  constructor(public home:HomeService, private router :Router){ }

  ngOnInit(): void {
  }
  getspecial(){
    this.home.getspecial()
    .subscribe(
      res=>this.home.getspecial=res,
      err=>{
        if(err instanceof HttpErrorResponse){

          if (err.status===401){
            this.router.navigate(["/login"])
          }
        }
      
      }
      
    )
  }


}
