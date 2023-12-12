import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private accessToken = "access_token"

  username: string = "";
  password: string = "";


  constructor(private authService: AuthService, private dialogRef: MatDialogRef<LoginComponent>) {
  }

  public login(): void {
    sessionStorage.removeItem(this.accessToken)
    this.authService.login(this.username, this.password).subscribe({
      next: (token) => {
        sessionStorage.setItem(this.accessToken, token)
        this.dialogRef.close()
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }


}
