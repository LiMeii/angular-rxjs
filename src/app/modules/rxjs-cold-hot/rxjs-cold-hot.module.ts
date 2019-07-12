
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RxjsColdHotComponent } from "./rxjs-cold-hot.component";

const coldHotRoutes: Routes = [
    { path: '', component: RxjsColdHotComponent }
]

@NgModule({
    imports: [RouterModule.forChild(coldHotRoutes)],
    declarations: [RxjsColdHotComponent]

})

export class RxjsColdHotModule {

}