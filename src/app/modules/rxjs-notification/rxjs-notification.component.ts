import { Component } from "@angular/core";
import { Observable, Subject, merge } from "rxjs";

import { User } from "./interface/rxjs-notification.interface";

import { RxjsNotificationService } from "./service/rxjs-notification.service";
import { take, mergeMap, skip, mapTo } from 'rxjs/operators';

@Component({
    templateUrl: "./rxjs-notification.component.html"

})

export class RxjsNotificationComponent {
    private users$: Observable<Array<User>>;
    //updateClick$ = new Subject<void>();
    showNotificatoin$: Observable<boolean>;
    forceReload$ = new Subject<void>()

    constructor(private rxjsNotificationService: RxjsNotificationService) { }

    ngOnInit() {
        const initialUsers$ = this.getUserOnce();

        // const updateUsers$ = merge(this.updateClick$, this.forceReload$).pipe(
        //     mergeMap(() => this.getUserOnce())
        // )

        const updateUsers$ = this.forceReload$.pipe(
            mergeMap(() => this.getUserOnce())
        )

        const initNotification$ = this.rxjsNotificationService.users.pipe(skip(1));
        const show$ = initNotification$.pipe(mapTo(true));
        const hide$ = updateUsers$.pipe(mapTo(false));
        this.showNotificatoin$ = merge(show$, hide$);

        this.users$ = merge(initialUsers$, updateUsers$);

    }

    getUserOnce() {
        return this.rxjsNotificationService.users.pipe(take(1));
    }

    forceReload() {
        this.rxjsNotificationService.forceReload();
        this.forceReload$.next();
    }
}