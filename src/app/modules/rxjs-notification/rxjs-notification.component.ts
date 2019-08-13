import { Component } from "@angular/core";
import { Observable, Subject, merge } from "rxjs";

import { User } from "./interface/rxjs-notification.interface";

import { RxjsNotificationService } from "./service/rxjs-notification.service";
import { take, mergeMap } from 'rxjs/operators';

@Component({
    templateUrl: "./rxjs-notification.component.html"

})

export class RxjsNotificationComponent {
    private users$: Observable<Array<User>>;
    updateClick$ = new Subject<void>();
    forceReload$ = new Subject<void>()

    constructor(private rxjsNotificationService: RxjsNotificationService) { }

    ngOnInit() {
        const initialUsers$ = this.getUserOnce();

        const updateUsers$ = merge(this.updateClick$, this.forceReload$).pipe(
            mergeMap(() => this.getUserOnce())
        )

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