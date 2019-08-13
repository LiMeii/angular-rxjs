import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { RxjsNotificationComponent } from "./rxjs-notification.component"

import { RxjsNotificationService } from "./service/rxjs-notification.service"

const notificationRoute: Routes = [
    { path: '', component: RxjsNotificationComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(notificationRoute),
        CommonModule,
        NgbAlertModule
    ],
    declarations: [RxjsNotificationComponent],
    providers: [RxjsNotificationService]

})

export class RxjsNotificationModule {

}