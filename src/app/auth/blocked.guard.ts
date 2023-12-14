import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {AuthService} from "./auth.service";
import {AccountService} from "../services/account.service";

@Injectable({
  providedIn: 'root',
})
export class BlockedGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private accountService: AccountService,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAccess(next);
  }

  private checkAccess(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const profileOwnerId = +next.params['id'];

    // Make an HTTP request to check access
    return this.authService.canAccess(this.accountService.accountId!, profileOwnerId).pipe(
      map((response: boolean) => {
        if (response) {
          return true; // Allow access
        } else {
          this.router.navigate(['/home']);
          return false; // Block access
        }
      }),
      catchError((error) => {
        console.error("Error checking access:", error);
        this.router.navigate(['/home']);
        return of(false); // Block access in case of an error
      })
    );
  }
}
