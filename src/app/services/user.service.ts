import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiUrl: string = 'http://35.234.87.9:8080/api/user'

  constructor(private http: HttpClient) {
  }

  public getUser(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '?id=' + id)
  }

}
