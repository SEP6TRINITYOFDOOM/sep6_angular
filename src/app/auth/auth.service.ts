import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null
  private accessToken = "access_token"
  private api = 'http://localhost:8080/api/auth'

  constructor(private http: HttpClient) {
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem(this.accessToken, token)
  }

  getToken(): string | null {
    return this.token || localStorage.getItem(this.accessToken)
  }

  removeToken(): void {
    this.token = null;
    localStorage.removeItem(this.accessToken);
  }

  login(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password
    }
    return this.http.post<any>(this.api + "/login", body);
  }

  register(username: string, email: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password,
      email: email
    }

    return this.http.post<any>(this.api + "/register", body);

  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

}
