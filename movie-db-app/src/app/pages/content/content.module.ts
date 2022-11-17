import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from "./content-routing.module";
import { CardComponent } from "../../shared/custom-components/card/card.component";
import { ApiService } from "../../shared/services/api.service";
import { ApiKeyInterceptor } from "../../core/interceptors/api-key.interceptor";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { SearchInputComponent } from "../../shared/custom-components/search-input/search-input.component";
import { MatInputModule }  from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { SearchPipe } from "../../shared/search-pipes/search.pipe";
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { SuggestComponent } from './suggest/suggest.component';
import { ButtonComponent } from "../../shared/custom-components/button/button.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JsonServerService } from "../../shared/services/json-server.service";

@NgModule({
    declarations: [
        HomeComponent,
        CardComponent,
        SearchInputComponent,
        SearchPipe,
        MoviesComponent,
        TvComponent,
        SuggestComponent,
        ButtonComponent
    ],
    imports: [
        ContentRoutingModule,
        CommonModule,
        HttpClientModule,
        MatInputModule,
        FormsModule,
        MatSnackBarModule
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
  exports: [
    SearchInputComponent,
    ButtonComponent
  ],
    bootstrap: []
})
export class ContentModule { }
