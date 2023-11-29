import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './homepage/Components/navigation/navigation.component';
import { MovieCarouselComponent } from './homepage/Components/movie-carousel/movie-carousel.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    NavigationComponent,
    MovieCarouselComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,HomepageComponent, NavigationComponent, MovieCarouselComponent, RegisterComponent]
})
export class AppModule { }
