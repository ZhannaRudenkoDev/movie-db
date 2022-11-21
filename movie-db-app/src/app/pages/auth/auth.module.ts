import { NgModule } from '@angular/core';
import { ApiService } from "../../shared/services/api.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatInputModule }  from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JsonServerService } from "../../shared/services/json-server.service";
import { AuthRoutingModule } from "./auth-routing.module";
import { LogInComponent } from './log-in/log-in.component';
import { ContentModule } from "../content/content.module";
import { SnackBarService } from "../../shared/services/snackbar.service";


@NgModule({
  declarations: [
    LogInComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    AuthRoutingModule,
    ContentModule
  ],
  providers: [
    ApiService,
    JsonServerService,
    SnackBarService,
  ],
  bootstrap: []
})
export class AuthModule { }
