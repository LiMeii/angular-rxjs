import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs"

import { MessageService } from "../service/messaging.service";

@Component({
    templateUrl: "./rxjs-subject-a.component.html"

})

export class RxjsSubjectAComponent implements OnDestroy {
    subscription: Subscription;

    constructor(private messageService: MessageService) {
        this.subscription = this.messageService.getData()
            .subscribe(val => {
                console.log("this is in RxjsSubjectAComponent and " + val);
            });

        let subscription1 = this.messageService.currentBehaviorSubject
            .subscribe(val => {
                console.log("this is in RxjsSubjectAComponent and Current behavior subject value is  " + val)
            });

        this.subscription.add(subscription1);

        let subscription2 = this.messageService.getReplaySubject()
            .subscribe(val => {
                console.log("this is in RxjsSubjectAComponent and Current Replay subject value is  " + val)
            });

        this.subscription.add(subscription2);

        let subscription3 = this.messageService.getAsyncSubject()
            .subscribe(val => {
                console.log("this is in RxjsSubjectAComponent and Current Async subject value is  " + val)
            });

        this.subscription.add(subscription3);

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();

    }

}