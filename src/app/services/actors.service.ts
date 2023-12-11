import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private url = "http://localhost:8080/actors/trending";

  constructor(private http: HttpClient) { }

  getTrending(){
    return this.http.get(this.url);
  }
}
