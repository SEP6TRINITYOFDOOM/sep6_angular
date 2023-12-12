import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../../views/login/login.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() public sideNavToggle = new EventEmitter();

  constructor(private authService: AuthService, private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  public onToggleSideNav = () =>{
    this.sideNavToggle.emit();
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn()
  }

  public openLogin(): void{
    const dialogRef = this.dialog.open(LoginComponent, {
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    })
  }
}
