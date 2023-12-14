import {Component} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = "";
  password: string = "";
  email: string = "";


  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<RegisterComponent>,
    private dialog: MatDialog,
    private accountService: AccountService) {
  }

  public register() {
    this.authService.removeToken();

    this.authService.register(this.username, this.email, this.password).subscribe({
      next: () => {
        this.dialogRef.close();

        this.authService.login(this.username, this.password).subscribe({
          next: (response) => {
            this.authService.setToken(response.token);
            this.accountService.accountId = response.id;
            this.dialogRef.close();
          },
          error: () => {
          }
        });
      },
      error: () => {
      }
    });
  }


  public openLogin() {
    this.dialogRef.close()
    this.dialog.open(LoginComponent, {})
  }


}
