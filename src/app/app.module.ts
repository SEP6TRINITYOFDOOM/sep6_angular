import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {LoginComponent} from './views/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ProfileComponent} from './views/profile/profile.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MovieItemComponent} from './views/movie-item/movie-item.component';
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {FriendItemComponent} from './views/friend-item/friend-item.component';
import {AccountSettingsComponent} from './views/account-settings/account-settings.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MovieCarouselComponent} from "./homepage/movie-carousel/movie-carousel.component";
import { NewsCardComponent } from './homepage/news-card/news-card.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AppRoutingModule, routingComponents} from "./app-routing/app-routing.module";
import { HeaderComponent } from './header/header.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MovieCarouselComponent,
    SearchBarComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    MovieItemComponent,
    FriendItemComponent,
    AccountSettingsComponent,
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  icon = "";

  constructor() {
  }

}
