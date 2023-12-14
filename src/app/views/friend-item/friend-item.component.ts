import {Component, Input} from '@angular/core';
import {FriendshipService} from "../../services/friendship.service";
import {Friend} from "../../services/user.dto/user";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css']
})
export class FriendItemComponent {

  @Input() friendName: string = "";
  @Input() profilePictureUrl: string = '';
  @Input() userIsRequester = false
  @Input() friend: Friend | null = null

  constructor(private friendService: FriendshipService, private router: Router, private accountService: AccountService) {
  }

  public sendFriendRequest(event: MouseEvent) {
    if (this.friend?.user.id) {
      this.friendService.sendFriendRequest(this.friend.user.id).subscribe({
        next: response => console.log(response)
      })
    }
    event.stopPropagation()
  }

  public block(event: MouseEvent) {
    if (this.friend?.user.id) {
      this.friendService.blockUser(this.friend.user.id).subscribe({
        next: response => console.log(response)
      })
    }
    event.stopPropagation()
  }

  public reject(event: MouseEvent) {
    if (this.friend?.id) {
      this.friendService.deleteFriendship(this.friend.id).subscribe({
        next: response => console.log(response)
      })
    }
    event.stopPropagation()
  }

  public accept(event: MouseEvent) {
    if (this.friend?.id) {
      this.friendService.acceptFriendRequest(this.friend.id).subscribe({
        next: response => console.log(response)
      })
    }
    event.stopPropagation()
  }

  public navigateToProfile() {
    this.router.navigate(['/profile', this.friend?.user.id])
  }

  public isBlockable(): boolean {
    return (this.friend?.user.id !== this.accountService.accountId) && this.friend?.status!=='BLOCKED'
  }


}
