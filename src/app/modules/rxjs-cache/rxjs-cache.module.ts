import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common"

import { RxjsCacheComponent } from "./rxjs-cache.component";

import { RxjsCacheService } from "./service/rxjs-cache.service";

const rxjsCacheRoute: Routes = [
    { path: "", component: RxjsCacheComponent }
];

@NgModule({
    imports: [RouterModule.forChild(rxjsCacheRoute), CommonModule],
    declarations: [RxjsCacheComponent],
    providers: [RxjsCacheService]
})

export class RxjsCacheModule {
}