import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { RxjsErrorHandleService } from "./service/rxjs-error-handle.service";

import { RxjsErrorHanleComponent } from "./rxjs-error-handle.component";

const routes: Routes = [
    { path: '', component: RxjsErrorHanleComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    declarations: [RxjsErrorHanleComponent],
    providers: [RxjsErrorHandleService]
})

export class RxjsErrorHanleModule {

}