import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from "../../auth/auth.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  submitted= false;
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private auth:AuthService, private formBuilder:FormBuilder) {
    this.registerIcons();
  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]
      }
    );
  }

  login(username:string, password:string){
    this.auth.login(username, password);
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

  get f(): { [key: string] : AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    console.log(this.loginForm.value, null, 2);
    this.auth.login(
      JSON.stringify(this.loginForm.controls['username']),
      JSON.stringify(this.loginForm.controls['password'])
    );
  }

  onReset(){
    this.submitted = false;
    this.loginForm.reset();
  }
}
