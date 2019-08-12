import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RxjsCacheComponent } from "./rxjs-cache.component";

const rxjsCacheRoute: Routes = [
    { path: "", component: RxjsCacheComponent }
];

@NgModule({
    imports: [RouterModule.forChild(rxjsCacheRoute)],
    declarations: [RxjsCacheComponent]

})

export class RxjsCacheModule {
}