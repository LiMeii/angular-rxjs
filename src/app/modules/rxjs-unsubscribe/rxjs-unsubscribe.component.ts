import { Component, OnInit } from "@angular/core";

import { User } from "./interface/rxjs-unsubscribe.interface";
import { RxjsUnsubscribeService } from "./service/rxjs-unsubscribe.service";

@Component({
    templateUrl: "./rxjs-unsubscribe.component.html"

})

export class RxjsUnsubscribeComponent implements OnInit {

    users: Array<User> = [];
    constructor(private rxjsUnsubscribeService: RxjsUnsubscribeService) { }

    ngOnInit() {
        this.rxjsUnsubscribeService.users
            .subscribe(
                (data) => {
                    this.users = data;
                },
                (error) => {
                    console.log("something went wrong: " + error);
                },
                () => {
                    console.log("getuser http request has been complete!");
                }
            );
    }
}