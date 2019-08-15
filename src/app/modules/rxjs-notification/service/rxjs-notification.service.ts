import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../interface/rxjs-notification.interface";
import { map, catchError, shareReplay, switchMap, takeUntil } from 'rxjs/operators';
import { of, Observable, timer, Subject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10000;
const API_ENDPOINT = "https://api.github.com/users?since=";

@Injectable()

export class RxjsNotificationService {

    private cacheUsers$: Observable<Array<User>>;
    private userStartId: number = 0;

    constructor(private http: HttpClient) { }

    get users() {
        if (!this.cacheUsers$) {
            const timer$ = timer(0, REFRESH_INTERVAL);
            this.cacheUsers$ = timer$
                .pipe(
                    switchMap(() => this.requestUsers()),
                    shareReplay(CACHE_SIZE)
                );
        }
        return this.cacheUsers$;
    }

    private requestUsers() {
        this.userStartId = this.userStartId + 30;
        return this.http.get<Array<User>>(API_ENDPOINT + this.userStartId)
            .pipe(
                map(respone => respone),
                catchError(error => {
                    console.log("something went wrong " + error)
                    return of([]);
                })
            )
    }

}