import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class RxjsErrorHandleService {
    constructor(private http: HttpClient) { }
    //https://developer.github.com/v3/users/#get-all-users

    getGitHubUsers(): Observable<any> {
        return this.http.get("https://api.github.com/users?since=1")
            .pipe(
                map(res => res),
                catchError(error => {
                    console.log('catch the error: ' + error);
                    return of([])
                })
            )
    }
}