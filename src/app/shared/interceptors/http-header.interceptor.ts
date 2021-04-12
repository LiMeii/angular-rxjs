import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent,HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
    intercept(httpRequest:HttpRequest<any>, next:HttpHandler) : Observable<HttpEvent<any>> {
        
        // const test = '1234';   
        // return next.handle(httpRequest.clone({setHeaders:{test}}));

        return next.handle(httpRequest.clone());
    }

}