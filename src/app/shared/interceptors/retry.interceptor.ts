import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { retry } from "rxjs/operators";



@Injectable()
export class RetryInterceptor implements HttpInterceptor {

    intercept(httpRequest:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(httpRequest).pipe(retry(2));
    }

}