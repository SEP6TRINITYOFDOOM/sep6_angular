import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Movie} from "./Movie DTO/Movie";
import {Observable} from "rxjs";
import {MovieDetails} from "./Movie DTO/MovieDetails";

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
}