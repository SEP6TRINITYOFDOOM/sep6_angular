import {Component, Output, EventEmitter, Inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../../views/login/login.component";
import {AuthService} from "../../auth/auth.service";
import {RegisterComponent} from "../../views/register/register.component";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() public sideNavToggle = new EventEmitter();

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router,
    @Inject(AccountService) private accountService: AccountService) {
  }

  public onToggleSideNav = () => {
    this.sideNavToggle.emit();
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn()
  }

  public openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {})

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    })
  }

  public openRegister(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {})

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result: ', result)
    })
  }

  public logout() {
    this.authService.removeToken();
    this.accountService.clearAccount()
  }

  public goToProfile() {
    this.router.navigate(['/profile', this.accountService.accountId])
  }
}
