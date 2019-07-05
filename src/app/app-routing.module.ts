import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "rxjslearning"
  },
  {
    path: "rxjslearning",
    loadChildren: "./modules/rxjs-learning/rxjs-learning.module#RxjsLearningModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
