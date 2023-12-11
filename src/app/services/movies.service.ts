import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url = 'http://localhost:8080/movies/trending';

  constructor(private http: HttpClient) { }

  getTrending() {

    const header: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer JWT-token'
    });

    return this.http.get(this.url);
  }
}
