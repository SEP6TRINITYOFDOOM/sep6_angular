import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessToken = "access_token"

  constructor(private http: HttpClient) {
  }

  isLoggedIn() {
    return sessionStorage.getItem(this.accessToken) != null
  }

  login(username: string, password: string): Observable<string> {
    const httpOptions = {
      responseType: 'text' as 'text',
    };
    const body = {
      username: username,
      password: password
    }
    return this.http.post("http://localhost:8080/api/auth/login", body, httpOptions);
  }

  logout() {
    sessionStorage.removeItem(this.accessToken);
  }
}
