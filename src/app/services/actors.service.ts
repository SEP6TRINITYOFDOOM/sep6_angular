import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Actor} from "./Actor DTO/Actor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private url = "http://localhost:8080/actors/trending";

  constructor(private http: HttpClient) { }

  getTrending(): Observable<Actor[]>{
    return this.http.get<Actor[]>(this.url);
  }
}
