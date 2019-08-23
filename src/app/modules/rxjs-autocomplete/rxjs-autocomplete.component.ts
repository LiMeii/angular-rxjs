import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subject, Subscription, of, merge } from 'rxjs';
import { map, mapTo, debounceTime, distinctUntilChanged, mergeMap, filter, switchMap } from 'rxjs/operators';

import { SearchResult, User } from "./interface/rxjs-autocomplete.interface";
import { RxjsAutocompleteService } from "./service/rxjs-autocomplete.service";


@Component({
    templateUrl: "./rxjs-autocomplete.component.html"

})

export class RxjsAutoCompleteComponent implements OnInit, OnDestroy {

    users: Array<User> = [];
    onSearchUser$ = new Subject<KeyboardEvent>();

    validSearch$: Observable<any>;
    emptySearch$: Observable<any>;

    subscription: Subscription;
    constructor(private rxjsAutocompleteService: RxjsAutocompleteService) { }

    ngOnInit() {
        this.validSearch$ = this.onSearchUser$
            .pipe(
                debounceTime(1000),
                map(event => (<HTMLInputElement>event.target).value),
                filter(input => input !== ""),
                distinctUntilChanged(),
                switchMap(data => this.rxjsAutocompleteService.searchUser(data))
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