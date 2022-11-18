import { NgModule } from '@angular/core';
import { ApiService } from "../../shared/services/api.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatInputModule }  from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JsonServerService } from "../../shared/services/json-server.service";
import { ContentModule } from "../content/content.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    AdminRoutingModule,
    ContentModule,
  ],
  providers: [
    ApiService,
    JsonServerService
    /* {
       provide: HTTP_INTERCEPTORS,
       useClass: ApiKeyInterceptor,
       multi: true,
     },*/
  ],
  bootstrap: []
})
export class AdminModule { }
