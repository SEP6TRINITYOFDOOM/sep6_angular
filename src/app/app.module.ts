import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './homepage/Components/navigation/navigation.component';
import { MovieCarouselComponent } from './homepage/Components/movie-carousel/movie-carousel.component';
import { LoginComponent } from './views/login/login/login.component';
import { SepButton } from './components/ui/sep6-button/sep-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    NavigationComponent,
    MovieCarouselComponent,
    LoginComponent,
    SepButton
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HomepageComponent, NavigationComponent, MovieCarouselComponent, RegisterComponent]
})
export class AppModule { }
