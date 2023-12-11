import {Component, inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../service/movies.service";
import {MovieDetails} from "../../service/Movie DTO/MovieDetails";
import {Genre} from "../../service/Movie DTO/Genre";
import {ProductionCompany} from "../../service/Movie DTO/ProductionCompany";
import {ProductionCountry} from "../../service/Movie DTO/ProductionCountry";
import {SpokenLanguage} from "../../service/Movie DTO/SpokenLanguage";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {


  @Input() id: string = '';

  constructor(private movieService: MoviesService) {
  }

  public movieDetails : MovieDetails = new class implements MovieDetails {
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

  ngOnInit() {
    console.log("ID=" + this.id);

    this.movieService.getMovie(this.id).subscribe(
      data => this.movieDetails = data
    );

  }
}
