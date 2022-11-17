import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/custom-components/header/header.component';
import { NavbarComponent } from './shared/custom-components/navbar/navbar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MoviesDetailsComponent } from './shared/custom-components/movies-details/movies-details.component';
import { TvDetailsComponent } from './shared/custom-components/tv-details/tv-details.component';
import { ManualDialogComponent } from './shared/custom-components/manual-dialog/manual-dialog.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { ContentModule } from "./pages/content/content.module";
import { ApproveDialogComponent } from './shared/custom-components/approve-dialog/approve-dialog.component';
import { FooterComponent } from './core/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MoviesDetailsComponent,
    TvDetailsComponent,
    ManualDialogComponent,
    ApproveDialogComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
