import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AccountService} from "./account.service";
import {Observable} from "rxjs";
import {Friend} from "./user.dto/user";

@Injectable({
  providedIn: 'root',
})
export class FriendshipService {
  apiUrl: string = 'http://35.246.155.117:8080/api/friendships'


  constructor(private http: HttpClient, private accountService: AccountService) {
  }

  public sendFriendRequest(userId: number): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/request', {requester: this.accountService.accountId, target: userId})
  }

  public acceptFriendRequest(friendshipId: number): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/accept?friendshipId=' + friendshipId + '&acceptererId=' + this.accountService.accountId, null)
  }

  public blockUser(targetId: number): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/block?blockerId=' + this.accountService.accountId + '&targetId=' + targetId, null)
  }

  public deleteFriendship(friendshipId: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/reject?friendshipId=' + friendshipId + '&rejectererId=' + this.accountService.accountId)
  }

  public getFriends(userId: number): Observable<Friend[]> {
    return this.http.get<any>(this.apiUrl + '/' + userId + '/friends')
  }

  public getPending(userId: number): Observable<Friend[]> {
    return this.http.get<any>(this.apiUrl + '/' + userId + '/pending')
  }

  public getBlocked(userId: number): Observable<Friend[]> {
    return this.http.get<any>(this.apiUrl + '/' + userId + '/blocked')
  }
}
