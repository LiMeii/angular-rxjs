import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subject, Subscription, of, merge } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

import { SearchResult, User } from "./interface/rxjs-searchableinput.interface";
import { RxjsSearchableInputService } from "./service/rxjs-searchableinput.service";


@Component({
    templateUrl: "./rxjs-searchableinput.component.html"

})

export class RxjsSearchableInputComponent implements OnInit, OnDestroy {

    users: Array<User> = [];
    onSearchUser$ = new Subject<KeyboardEvent>();

    validSearch$: Observable<any>;
    emptySearch$: Observable<any>;

    subscription: Subscription;
    constructor(private rxjsSearchableInputService: RxjsSearchableInputService) { }

    ngOnInit() {
        this.validSearch$ = this.onSearchUser$
            .pipe(
                debounceTime(1000),
                map(event => (<HTMLInputElement>event.target).value),
                distinctUntilChanged(),
                filter(input => input !== ""),
                switchMap(data => this.rxjsSearchableInputService.searchUser(data))
            )

        this.emptySearch$ = this.onSearchUser$.pipe(
            debounceTime(1000),
            map(event => (<HTMLInputElement>event.target).value),
            filter(input => input === ""),
            switchMap(data => of([]))
        )

        this.subscription = merge(this.validSearch$, this.emptySearch$)
            .subscribe(resp => {
                if (resp && resp.items && resp.items.length) {
                    let result = resp as SearchResult;
                    this.users = result.items;
                } else {
                    this.users = [];
                }
            })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}