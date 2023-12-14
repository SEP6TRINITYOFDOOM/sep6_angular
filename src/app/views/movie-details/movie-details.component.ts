import {Component, Inject, Input, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {MovieDetails} from "../../services/Movie DTO/MovieDetails";
import {Genre} from "../../services/Movie DTO/Genre";
import {ProductionCompany} from "../../services/Movie DTO/ProductionCompany";
import {ProductionCountry} from "../../services/Movie DTO/ProductionCountry";
import {SpokenLanguage} from "../../services/Movie DTO/SpokenLanguage";
import {MovieCredits} from "../../services/Movie DTO/MoviesCredits";
import {Cast} from "../../services/Movie DTO/Cast";
import {Crew} from "../../services/Movie DTO/Crew";
import {FavouriteService} from "../../services/favourite.service";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() id: string = '';

  public stars: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor(private movieService: MoviesService, private favouriteService: FavouriteService, @Inject(AccountService) private accountService: AccountService) {
  }

  public movieDetails: MovieDetails = new class implements MovieDetails {
    adult: boolean = false;
    backdrop_path: string = "";
    belongs_to_collection: any;
    budget: number = 0;
    genres: Genre[] = [];
    homepage: string = "";
    id: number = 0;
    imdb_id: string = "";
    original_language: string = "";
    original_title: string = "";
    overview: string = "";
    popularity: number = 0;
    poster_path: string = "";
    production_companies: ProductionCompany[] = [];
    production_countries: ProductionCountry[] = [];
    release_date: string = "";
    revenue: number = 0;
    runtime: number = 0;
    spoken_languages: SpokenLanguage[] = [];
    status: string = "";
    tagline: string = "";
    title: string = "";
    video: boolean = false;
    vote_average: number = 0;
    vote_count: number = 0;
  }

  public movieCredits : MovieCredits = new class implements MovieCredits {
    cast: Cast[] = [];
    crew: Crew[] = [];
    id: number = 0;
  }

  ngOnInit() {
    console.log("ID=" + this.id);

    this.movieService.getMovie(this.id).subscribe(
      data => this.movieDetails = data
    );

    this.movieService.getCredits(this.id).subscribe(
      data => this.movieCredits = data
    );

  }

  public addToFavourites() {
    this.favouriteService.addToFavourites(this.accountService.accountId, +this.id, 1).subscribe()
  }

  rateMovie(rating: number){
    console.log(rating);
  }

}
