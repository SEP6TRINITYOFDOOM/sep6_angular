import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatExpansionModule} from "@angular/material/expansion";
import {HomepageComponent} from './views/homepage/homepage.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {LoginComponent} from './views/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ProfileComponent} from './views/profile/profile.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MovieItemComponent} from './views/movie-item/movie-item.component';
import {MatCardModule} from "@angular/material/card";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FriendItemComponent} from './views/friend-item/friend-item.component';
import {AccountSettingsComponent} from './views/account-settings/account-settings.component';
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
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    AppComponent,
    MovieCarouselComponent,
    SearchBarComponent,
    NewsCardComponent,
    routingComponents,
    HeaderComponent,
    SidenavListComponent,
    NavbarComponent
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
    NgOptimizedImage,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
