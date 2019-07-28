import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RxjsErrorHanleComponent } from "./rxjs-error-handle.component";

const routes: Routes = [
    { path: '', component: RxjsErrorHanleComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [RxjsErrorHanleComponent]
})

export class RxjsErrorHanleModule {

}