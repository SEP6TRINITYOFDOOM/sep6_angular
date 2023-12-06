import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private accessToken = "access_token"

  username: string = "";
  password: string = "";
  message: string = "";

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private authService: AuthService) {
    this.registerIcons();
  }


  private registerIcons() {
    this.matIconRegistry.addSvgIcon(
      'apple-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icon/apple.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'fb-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'google-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/google.svg')
    );
  }

  public login(): void {
    sessionStorage.removeItem(this.accessToken)

    this.authService.login(this.username, this.password).subscribe({
      next: (token) =>{
        sessionStorage.setItem(this.accessToken, token)
      }
    })
  }


}
