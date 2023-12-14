import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {SearchResult} from "./Search DTO/SearchResult";
import {CatFact} from "./catFact";

@Injectable({
  providedIn: 'root',
})
export class CatTestService {

  private url : string = 'https://catfact.ninja/fact?max_length=140';

  constructor(private http: HttpClient) {
  }

  getCatFact(): Observable<CatFact> {
    return this.http.get<CatFact>(this.url);
  }

}
