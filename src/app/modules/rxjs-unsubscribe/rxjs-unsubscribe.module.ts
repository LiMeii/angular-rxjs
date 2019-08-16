import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { RxjsUnsubscribeComponent } from "./rxjs-unsubscribe.component";
import { RxjsUnsubscribeService } from "./service/rxjs-unsubscribe.service";

const unsubscribeRoutes: Routes = [
    { path: "", component: RxjsUnsubscribeComponent }
]

@NgModule({
    imports: [RouterModule.forChild(unsubscribeRoutes), CommonModule],
    declarations: [RxjsUnsubscribeComponent],
    providers: [RxjsUnsubscribeService]
})

export class RxjsUnsubscribeModule {

}