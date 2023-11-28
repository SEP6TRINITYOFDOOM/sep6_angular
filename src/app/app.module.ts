import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {HomepageComponent} from './homepage/homepage.component';
import {NavigationComponent} from './homepage/Components/navigation/navigation.component';
import {MovieCarouselComponent} from './homepage/Components/movie-carousel/movie-carousel.component';
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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    NavigationComponent,
    MovieCarouselComponent,
    LoginComponent,
    ProfileComponent,
    MovieItemComponent,
    FriendItemComponent,
    AccountSettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent, HomepageComponent, NavigationComponent, MovieCarouselComponent, RegisterComponent]
})
export class AppModule {
}
