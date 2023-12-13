import { Component } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = "";
  password: string = "";
  email: string = "";


  constructor(private authService: AuthService, private dialogRef: MatDialogRef<RegisterComponent>, private dialog: MatDialog) {
  }

  public register(){
    this.authService.removeToken()
    this.authService.register(this.username, this.email, this.password).subscribe({
      next: (response) => {
        this.dialogRef.close()
        this.authService.login(this.username, this.password).subscribe({
          next: token => {
            this.authService.setToken(token)
            this.dialogRef.close()
          }
        })
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }

  public openLogin(){
    this.dialogRef.close()
    this.dialog.open(LoginComponent, {})
  }


}
