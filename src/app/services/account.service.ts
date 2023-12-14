import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _accountId: number | null = null;

  get accountId(): number | null {
    return this._accountId ?? +localStorage.getItem('userId')! ?? null;
  }


  set accountId(accountId: number) {
    this._accountId = accountId;
    localStorage.setItem('userId', String(accountId))
  }

  public clearAccount() {
    this.accountId = -1;
    localStorage.removeItem('userId')
  }
}

