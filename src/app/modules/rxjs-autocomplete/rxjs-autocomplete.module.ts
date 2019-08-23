import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RxjsAutoCompleteComponent } from "../rxjs-autocomplete/rxjs-autocomplete.component";

const autocompleteRoute: Routes = [
    {
        path: "", component: RxjsAutoCompleteComponent

    }
]

@NgModule({
    imports: [RouterModule.forChild(autocompleteRoute)],

    declarations: [RxjsAutoCompleteComponent]
})

export class RxjsAutoCompleteModule {

}