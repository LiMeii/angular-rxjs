import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { RxjsAutoCompleteComponent } from "../rxjs-autocomplete/rxjs-autocomplete.component";
import { RxjsAutocompleteService } from "./service/rxjs-autocomplete.service";

const autocompleteRoute: Routes = [
    {
        path: "", component: RxjsAutoCompleteComponent

    }
]

@NgModule({
    imports: [RouterModule.forChild(autocompleteRoute), CommonModule],
    declarations: [RxjsAutoCompleteComponent],
    providers: [RxjsAutocompleteService]
})

export class RxjsAutoCompleteModule {

}