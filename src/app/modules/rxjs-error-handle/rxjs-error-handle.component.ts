import { Component, OnInit } from "@angular/core";

import { RxjsErrorHandleService } from "./service/rxjs-error-handle.service";


@Component({
    templateUrl: "./rxjs-error-handle.component.html"
})

export class RxjsErrorHanleComponent implements OnInit {

    users: any;
    constructor(private rxjsErrorHandleService: RxjsErrorHandleService) { }

    ngOnInit() {
        this.rxjsErrorHandleService.getGitHubUsers()
            .subscribe(
                res => {
                    this.users = res;
                    console.log("here is the value " + res);
                },
                error => {
                    console.log("something went wrong " + error);
                },
                () => {
                    console.log("http request has been completed!")
                })
    }
}