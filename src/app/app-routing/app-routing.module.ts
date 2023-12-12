import { NgModule } from '@angular/core';
import {provideRouter, RouterModule, Routes, withComponentInputBinding} from "@angular/router";
import {RegisterComponent} from "../views/register/register.component";
import {MovieDetailsComponent} from "../views/movie-details/movie-details.component";
import {HomepageComponent} from "../views/homepage/homepage.component";
import {LoginComponent} from "../views/login/login.component";
import {ProfileComponent} from "../views/profile/profile.component";
import {MovieItemComponent} from "../views/movie-item/movie-item.component";
import {FriendItemComponent} from "../views/friend-item/friend-item.component";
import {AccountSettingsComponent} from "../views/account-settings/account-settings.component";
import {ActorDetailsComponent} from "../views/actor-details/actor-details.component";
import {SearchResultComponent} from "../views/search-result/search-result.component";

const routes: Routes = [
  { path: 'home',             component: HomepageComponent},
  { path: 'register',         component: RegisterComponent},
  { path: 'login',            component: LoginComponent},
  { path: 'profile',          component: ProfileComponent},
  { path: 'account-settings', component: AccountSettingsComponent},
  { path: 'friend-item',      component: FriendItemComponent},
  { path: 'movie-item',       component: MovieItemComponent},
  { path: 'movie-details/:id',    component: MovieDetailsComponent},
  { path: 'actor-details', component: ActorDetailsComponent},
  { path: 'search/:searchParam', component: SearchResultComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomepageComponent,
  RegisterComponent,
  LoginComponent,
  ProfileComponent,
  AccountSettingsComponent,
  FriendItemComponent,
  MovieItemComponent,
  SearchResultComponent,
  MovieDetailsComponent,
  ActorDetailsComponent];
