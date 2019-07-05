import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RxjsLearningComponent } from "./rxjs-learning.component";

const routes: Routes = [
    { path: '', component: RxjsLearningComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [RxjsLearningComponent]

})


export class RxjsLearningModule {

}