import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { MessageService } from "../service/messaging.service";

@Component({
    selector: "rxjs-subjectc",
    templateUrl: "./rxjs-subject-c.component.html"
})

export class RxjsSubjectCComponent implements OnDestroy {
    subscription: Subscription;
    message: string = "aaaaaa";

    constructor(private messageService: MessageService) {
        this.subscription = this.messageService.getData()
            .subscribe(val => {
                this.message = val;
                console.log(val);
            });

        setTimeout(() => {
            let subscription1 = this.messageService.currentBehaviorSubject
                .subscribe(val => {
                    console.log("this is in RxjsSubjectCComponent and Current behavior subject value is  " + val)
                });
            this.subscription.add(subscription1);
        }, 5000);

        setTimeout(() => {
            let subscription2 = this.messageService.getReplaySubject()
                .subscribe(val => {
                    console.log("this is in RxjsSubjectCComponent and Current repaly subject value is  " + val)
                });
            this.subscription.add(subscription2);

        }, 5000);

        setTimeout(() => {
            let subscription3 = this.messageService.getAsyncSubject()
                .subscribe(val => {
                    console.log("this is in RxjsSubjectCComponent and Current async subject value is  " + val)
                });
            this.subscription.add(subscription3);

        }, 5000);

    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}