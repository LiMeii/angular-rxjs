import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MessageService } from "./modules/service/messaging.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
