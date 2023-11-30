import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
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
}
