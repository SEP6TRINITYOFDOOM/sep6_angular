import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Movie} from "./Movie DTO/Movie";

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  private url: string = 'http://35.246.155.117:8080/api/favourites';

  constructor(private http: HttpClient) {
  }

  public addToFavourites(userId: number | null, movieId: number, position: number): Observable<any> {
    const body = {
      userId: userId,
      movieId: movieId,
      position: position
    }

    return this.http.post(this.url, body)
  }

  public getFavourites(userId: number | null): Observable<Movie[]> {
    return this.http.get<any>(this.url + '?userId=' + userId)
  }


}
