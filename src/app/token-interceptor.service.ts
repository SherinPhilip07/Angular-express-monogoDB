import { Injectable ,Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HomeService } from './home.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req,next){
    let home=this.injector.get(HomeService)
    let tokenisedReq=req.clone({
      setHeaders:{
        Authorisation:`Bearer ${home.getToken()}`
      }
    })
    return next.handle(tokenisedReq)
  }
}
