import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { map, catchError, finalize } from "rxjs/operators";


@Injectable()
export class RxjsErrorHandleService {
    constructor(private http: HttpClient) { }
    //https://developer.github.com/v3/users/#get-all-users

    getGitHubUsers(): Observable<any> {
        return this.http.get("https://api2.github.com/users?since=1")
            .pipe(
                map(res => res),
                catchError(error => {
                    console.log("the first catcherror:" + error);
                    return throwError("re-throw error");
                }),
                catchError(error => {
                    console.log("the second catcherror: " + error);
                    return of([123])
                }),
                finalize(() => {
                    console.log("here is the finalize function");
                })

            )
    }
}