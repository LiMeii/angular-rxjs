import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../interface/rxjs-unsubscribe.interface";
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()

export class RxjsUnsubscribeService {

    constructor(private http: HttpClient) { }

    get users() {
        return this.requestUsers();
    }

    private requestUsers() {
        return this.http.get<Array<User>>("https://api.github.com/users?since=35")
            .pipe(
                map(respone => respone),
                catchError(error => {
                    console.log("something went wrong " + error)
                    return of([]);
                })
            )
    }
}