import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "./Movie DTO/Movie";
import {Observable} from "rxjs";
import {MovieDetails} from "./Movie DTO/MovieDetails";
import {MovieCredits} from "./Movie DTO/MoviesCredits";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url : string = '';

  constructor(private http: HttpClient) { }

  getMovie(id:string): Observable<MovieDetails> {
    this.url = 'http://localhost:8080/movies?id=' + id;
    return this.http.get<MovieDetails>(this.url);
  }

  getTrending(): Observable<Movie[]> {
    this.url = 'http://localhost:8080/movies/trending';
    return this.http.get<Movie[]>(this.url);
  }

  getCredits(id:string): Observable<MovieCredits> {
    this.url = 'http://localhost:8080/movie/' + id + "/credits"
    return this.http.get<MovieCredits>(this.url);
  }
}
