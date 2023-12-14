import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _accountId: number = -1;

  get accountId(): number {
    return this._accountId;
  }

  set accountId(accountId: number) {
    this._accountId = accountId;
  }

  public clearAccount(){
    this.accountId = -1;
  }
}
