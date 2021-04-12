import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MessageService } from "./modules/service/messaging.service";

import { HttpHeaderInterceptor } from "../app/shared/interceptors/http-header.interceptor";
import { RetryInterceptor } from "./shared/interceptors/retry.interceptor";

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
  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
