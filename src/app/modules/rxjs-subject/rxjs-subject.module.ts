import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RxjsSubjectAComponent } from "./rxjs-subject-a.component";
import { RxjsSubjectBComponent } from "./rxjs-subject-b.component";
import { RxjsSubjectCComponent } from "./rxjs-subject-c.component";



const routes: Routes = [
    { path: '', component: RxjsSubjectAComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [RxjsSubjectAComponent, RxjsSubjectBComponent, RxjsSubjectCComponent],
    providers: []
})


export class RxjsSubjectModule {

}