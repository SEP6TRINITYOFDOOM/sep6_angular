import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit{

  @Input() accountId: number | null = null

  email: string = ''
  password: string = ''
  username: string = ''

  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    if (this.accountId != null) {
      this.userService.getUserInfo(this.accountId).subscribe({
        next: response => {
          this.email = response.email
          this.password = response.password
          this.username = response.username
        }
      })
    }

  }

  save() {
    this.userService.putUserInfo({
      id: this.accountId!,
      email: this.email,
      username: this.username,
    }).subscribe({
      next: value => console.log(value),
      error: () => console.error()
    })
  }
}

export interface EditInfoRequest{
  id: number;
  username: string;
  email: string;

}
