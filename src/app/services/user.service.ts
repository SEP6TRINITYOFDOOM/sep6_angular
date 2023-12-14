import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EditInfoRequest} from "../views/account-settings/account-settings.component";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiUrl: string = 'http://35.234.113.110:8080/api/user'

  constructor(private http: HttpClient) {
  }
  public getUserInfo(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/info?id=' + id)
  }

  public putUserInfo(body: EditInfoRequest): Observable<any> {
    return this.http.put(this.apiUrl + '/info', body)
  }

}
