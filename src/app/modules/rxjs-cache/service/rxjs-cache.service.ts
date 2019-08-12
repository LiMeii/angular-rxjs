import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../interface/rxjs-cache.interface";
import { map, catchError, shareReplay } from 'rxjs/operators';
import { of, Observable } from 'rxjs';


const CACHE_SIZE = 1;

@Injectable()

export class RxjsCacheService {

    private cacheUsers$:Observable<Array<User>>;

    constructor(private http: HttpClient) { }

    get users() {
        //return this.requestUsers();

        if(!this.cacheUsers$){
            this.cacheUsers$ = this.requestUsers()
            .pipe(
                shareReplay(CACHE_SIZE)
            );
        }
       return this.cacheUsers$;
    }

    private requestUsers() {
        return this.http.get<Array<User>>("https://api.github.com/users?since=1")
            .pipe(
                map(respone => respone),
                catchError(error => {
                    console.log("something went wrong " + error)
                    return of([]);
                })
            )
    }
}