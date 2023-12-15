import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActorDetails} from "../../services/Actor DTO/ActorDetails";
import {MovieCredits} from "../../services/Movie DTO/MoviesCredits";

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private url : string = '';

  constructor(private http: HttpClient) { }

  getActorDetails(id: string): Observable<ActorDetails> {
    this.url = 'http://35.246.155.117:8080/actor/' + id;
    return this.http.get<ActorDetails>(this.url);
  }

  getFeaturedIn(id: string): Observable<MovieCredits> {
    this.url = 'http://35.246.155.117:8080/person/' + id;
    return this.http.get<MovieCredits>(this.url);
  }
}
