import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { RxjsSearchableInputComponent } from "./rxjs-searchableinput.component";
import { RxjsSearchableInputService } from "./service/rxjs-searchableinput.service";

const searchableInputRoute: Routes = [
    {
        path: "", component: RxjsSearchableInputComponent

    }
]

@NgModule({
    imports: [RouterModule.forChild(searchableInputRoute), CommonModule],
    declarations: [RxjsSearchableInputComponent],
    providers: [RxjsSearchableInputService]
})

export class RxjsSearchableInputModule {

}