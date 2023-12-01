import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MovieCarouselComponent} from "./components/movie-carousel/movie-carousel.component";
import { NewsCardComponent } from './components/news-card/news-card.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AppRoutingModule, routingComponents} from "./app-routing/app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    AppComponent,
    MovieCarouselComponent,
    SearchBarComponent,
    NewsCardComponent,
    routingComponents,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    CommonModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatListModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }

}
