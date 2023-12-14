import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../services/account.service";
import {UserService} from "../../services/user.service";
import {FavouriteService} from "../../services/favourite.service";
import {Movie} from "../../services/Movie DTO/Movie";
import {FriendshipService} from "../../services/friendship.service";
import {Friend, User} from "../../services/user.dto/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  movies: Movie[] = []
  friends: Friend[] = []
  pending: Friend[] = []
  blocked: Friend[] = []
  accountId: number = -1
  user: User | null = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private userService: UserService,
    private favouriteService: FavouriteService,
    private friendshipService: FriendshipService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.accountId = +id;

        this.getUserData();

        this.getFavourites();

        this.getAcceptedFriends();
        this.getBlocked()
        this.getPending()

      } else {
        console.error('could not extract user id')
      }
    });
  }

  private getAcceptedFriends() {
    this.friendshipService.getFriends(this.accountId).subscribe({
      next: response => {
        this.friends = response
        console.log(this.friends.length)
      }
    })
  }

  private getPending() {
    this.friendshipService.getPending(this.accountId).subscribe({
      next: response => {
        this.pending = response
        console.log(this.friends.length)
      }
    })
  }

  private getBlocked() {
    this.friendshipService.getBlocked(this.accountId).subscribe({
      next: response => {
        this.blocked = response
      }
    })
  }

  private getFavourites() {
    this.favouriteService.getFavourites(this.accountId).subscribe({
      next: response => {
        this.movies = response
      }
    })
  }

  private getUserData() {
    this.userService.getUserInfo(this.accountId).subscribe({
      next: response => {
        this.user = {
          username: response.username,
          id: response.id
        }
      }
    })
  }

  isProfileOwner(): boolean {
    return this.accountService.accountId === this.accountId
  }

  resolveProfilePicture(): string {
    if (this.user?.username) {
      return 'https://api.multiavatar.com/' + this.user.username + '.svg'
    } else
      return 'https://api.multiavatar.com/' + undefined + '.svg'
  }

}

