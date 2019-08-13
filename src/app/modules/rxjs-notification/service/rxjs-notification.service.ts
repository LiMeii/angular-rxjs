import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../interface/rxjs-notification.interface";
import { map, catchError, shareReplay, switchMap, takeUntil } from 'rxjs/operators';
import { of, Observable, timer, Subject } from 'rxjs';


const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10000;
const END_POINT = "https://api.github.com/users?since=";

@Injectable()

export class RxjsNotificationService {

    private cacheUsers$: Observable<Array<User>>;
    private userStartId = 0;
    private reload$ = new Subject<void>();

    constructor(private http: HttpClient) { }

    get users() {
        if (!this.cacheUsers$) {
            const timer$ = timer(0, REFRESH_INTERVAL);
            this.cacheUsers$ = timer$
                .pipe(
                    switchMap(() => this.requestUsers()),
                    takeUntil(this.reload$),
                    shareReplay(CACHE_SIZE)
                );
        }
        return this.cacheUsers$;
    }

    private requestUsers() {
        return this.http.get<Array<User>>(END_POINT + this.userStartId)
            .pipe(
                map(respone => respone),
                catchError(error => {
                    console.log("something went wrong " + error)
                    return of([]);
                })
            )
    }

    forceReload() {

        this.reload$.next();
        this.cacheUsers$ = null;

    }

}