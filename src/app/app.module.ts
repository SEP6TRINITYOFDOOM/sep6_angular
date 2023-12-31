import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatExpansionModule} from "@angular/material/expansion";
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
import { NewsCardComponent } from './components/news-card/news-card.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AppRoutingModule, routingComponents} from "./app-routing/app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import {MatDialogModule} from "@angular/material/dialog";
import {MovieItemComponent} from "./views/movie-item/movie-item.component";
import { ActorItemComponent } from './views/actor-item/actor-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NewsCardComponent,
    routingComponents,
    HeaderComponent,
    SidenavListComponent,
    MovieItemComponent,
    ActorItemComponent
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
    HttpClientModule,
    MatDialogModule
  ],
  providers: [AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
