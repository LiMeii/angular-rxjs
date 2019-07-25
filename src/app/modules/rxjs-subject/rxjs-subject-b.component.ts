import { Component, OnInit } from "@angular/core";

import { MessageService } from "../service/messaging.service";

@Component({
    selector: "rxjs-subjectb",
    templateUrl: "./rxjs-subject-b.component.html"
})

export class RxjsSubjectBComponent implements OnInit {

    constructor(private messageService: MessageService) {



    }
    ngOnInit() {
        this.messageService.sendData("this message from subject b");

        this.messageService.updateBehaviorSubject();

        this.messageService.sendReplaySubject();

        this.messageService.sendAsyncSubject();
    }

}