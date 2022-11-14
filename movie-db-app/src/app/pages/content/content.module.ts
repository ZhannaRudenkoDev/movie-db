import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from "./content-routing.module";
import { CardComponent } from "../../shared/custom-components/card/card.component";
import { ApiService } from "../../shared/services/api.service";
import { ApiKeyInterceptor } from "../../core/interceptors/api-key.interceptor";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    ContentRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    },*/
  ],
  bootstrap: []
})
export class ContentModule { }
