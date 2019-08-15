import { Component } from "@angular/core";
import { Observable, Subject, merge } from "rxjs";

import { User } from "./interface/rxjs-notification.interface";

import { RxjsNotificationService } from "./service/rxjs-notification.service";
import { take, mergeMap, skip, mapTo } from 'rxjs/operators';

@Component({
    templateUrl: "./rxjs-notification.component.html"

})

export class RxjsNotificationComponent {
    users$: Observable<Array<User>>;
    updateClick$ = new Subject<void>();
    showNotificatoin$: Observable<boolean>;

    constructor(private rxjsNotificationService: RxjsNotificationService) { }

    ngOnInit() {
        const initialUsers$ = this.getUserOnce();

        const updateUsers$ = this.updateClick$.pipe(
            mergeMap(() => this.getUserOnce())
        );

        this.users$ = merge(initialUsers$, updateUsers$);

        const initNotification$ = this.getNotifications();
        const show$ = initNotification$.pipe(mapTo(true));
        const hide$ = this.updateClick$.pipe(mapTo(false));
        this.showNotificatoin$ = merge(show$, hide$);

    }

    getUserOnce() {
        return this.rxjsNotificationService.users.pipe(take(1));
    }

    getNotifications() {
        return this.rxjsNotificationService.users.pipe(skip(1));
    }
}