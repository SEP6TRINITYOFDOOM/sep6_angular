import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../services/account.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  movies: Movie[] = []
  friends: Friend[] = []
  accountId: number = -1
  user: User | null = null

  constructor(private route: ActivatedRoute, private router: Router, private accountService: AccountService, private userService: UserService) {
    this.movies = [
      {
        title: 'Mulholland Drive',
        posterUrl: "https://xl.movieposterdb.com/07_10/2001/166924/xl_166924_22c04427.jpg?v=2023-09-14%2018:20:37"
      },
      {
        title: 'Napoleon',
        posterUrl: "https://xl.movieposterdb.com/23_10/0/13287846/xl_napoleon-movie-poster_38357dbe.jpg?v=2023-11-25%2019:09:33"
      },
      {
        title: 'Bladerunner 2049',
        posterUrl: "https://xl.movieposterdb.com/19_12/2017/1856101/xl_1856101_2c68bb27.jpg?v=2023-11-12%2017:50:17"
      },
      {
        title: 'Nightcrawler',
        posterUrl: "https://posters.movieposterdb.com/15_01/2014/2872718/l_2872718_8fbb66d3.jpg"
      },
      {
        title: 'Ford v Ferrari',
        posterUrl: "https://posters.movieposterdb.com/20_03/1995/114369/l_114369_ff13577f.jpg"
      },
      {
        title: 'American Psycho',
        posterUrl: "https://posters.movieposterdb.com/11_08/2000/144084/l_144084_1edb3ca0.jpg"
      },
      {
        title: 'Druk',
        posterUrl: "https://posters.movieposterdb.com/21_01/2020/10288566/l_10288566_43c6cd69.jpg"
      },
    ]

    this.friends = [
      this.friend('Alex Johnson'),
      this.friend('Emily Rodriguez'),
      this.friend('Marcus Williams'),
      this.friend('Jasmine Lee'),
      this.friend('Benjamin Taylor'),
      this.friend('Olivia Brown'),
      this.friend('Daniel Martinez'),
    ]
  }

  private friend(name: string, url: string = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"): Friend {
    return {name: name, profilePicUrl: url}
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.accountId = +id;

        this.userService.getUser(this.accountId).subscribe({
          next: response => {
            this.user = {
              name: response.username,
              email: response.email
            }

          }
        })

      } else {
        console.error('could not extract user id')
      }
    });
  }

  isProfileOwner(): boolean {
    return this.accountService.accountId === this.accountId
  }

}

//TODO subject to change
export interface Movie {
  title: string,
  posterUrl: string
}

export interface Friend {
  name: string,
  profilePicUrl: string
}

export interface User {
  email: string;
  name: string
}
