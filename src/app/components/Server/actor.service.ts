import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActorDetails} from "../../services/Actor DTO/ActorDetails";

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private url : string = '';

  constructor(private http: HttpClient) { }

  getActorDetails(id: string): Observable<ActorDetails> {
    this.url = 'http://localhost:8080/actors?id=' + id;
    return this.http.get<ActorDetails>(this.url);
  }
}
