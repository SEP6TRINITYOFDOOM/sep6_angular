import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../auth/auth.service";
import {RegisterComponent} from "../register/register.component";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";


  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private dialog: MatDialog,
    private accountService: AccountService) {
  }

  public login(): void {
    this.authService.removeToken()
    this.accountService.clearAccount()
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.authService.setToken(response.token)
        this.accountService.accountId = response.id
        this.dialogRef.close()
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  public openRegister() {
    this.dialogRef.close()
    this.dialog.open(RegisterComponent, {})
  }


}
