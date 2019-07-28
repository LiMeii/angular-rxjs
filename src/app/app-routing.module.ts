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
  },
  {
    path: "rxjscoldhot",
    loadChildren: "./modules/rxjs-cold-hot/rxjs-cold-hot.module#RxjsColdHotModule"
  },
  {
    path: "rxjssubject",
    loadChildren: "./modules/rxjs-subject/rxjs-subject.module#RxjsSubjectModule"
  },
  {
    path: "rxjserrorhandle",
    loadChildren: "./modules/rxjs-error-handle/rxjs-error-handle.module#RxjsErrorHanleModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
