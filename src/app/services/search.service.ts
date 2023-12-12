import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {SearchResult} from "./Search DTO/SearchResult";

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  private url : string = '';

  constructor(private http: HttpClient) {
  }

  getSearchResult(searchPhrase: string): Observable<SearchResult> {
    this.url = 'http://localhost:8080/search/' + searchPhrase;
    return this.http.get<SearchResult>(this.url);
  }

  searchWithGenre(searchPhrase: string, genre:number): Observable<SearchResult> {
    this.url = 'http://localhost:8080/search/' + searchPhrase + "/" + genre;
    return this.http.get<SearchResult>(this.url);
  }

}