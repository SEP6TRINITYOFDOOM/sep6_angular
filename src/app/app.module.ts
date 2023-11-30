import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
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
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {MovieCarouselComponent} from "./movie-carousel/movie-carousel.component";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    MovieCarouselComponent,
    SearchBarComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    MovieItemComponent,
    FriendItemComponent,
    AccountSettingsComponent,
    MovieDetailsComponent
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
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent, HomepageComponent, MovieCarouselComponent, RegisterComponent]
})
export class AppModule {
}
