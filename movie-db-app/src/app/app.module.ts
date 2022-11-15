import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/custom-components/header/header.component';
import { NavbarComponent } from './shared/custom-components/navbar/navbar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MoviesDetailsComponent } from './shared/custom-components/movies-details/movies-details.component';
import { TvDetailsComponent } from './shared/custom-components/tv-details/tv-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MoviesDetailsComponent,
    TvDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
