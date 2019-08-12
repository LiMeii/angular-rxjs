import { Component, OnInit } from "@angular/core";

import { RxjsCacheService } from "./service/rxjs-cache.service";
import { User } from "./interface/rxjs-cache.interface";
import { Observable } from 'rxjs';


@Component({
    templateUrl: "./rxjs-cache.component.html"
})

export class RxjsCacheComponent implements OnInit {

    private users$: Observable<Array<User>>;

    constructor(private rxjsCacheService: RxjsCacheService) { }

    ngOnInit() {
        this.users$ = this.rxjsCacheService.users;
    }

}