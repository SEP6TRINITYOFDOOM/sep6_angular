import {Component, Input} from '@angular/core';
import {MovieItemComponent} from "../movie-item/movie-item.component";
import {FriendItemComponent} from "../friend-item/friend-item.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  trendingMovies: MovieItemComponent[] = [
    {
      title: 'May December',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTc1ODM5YjQtMmQzNS00Y2FkLWJhNTgtYTE5ZDY0NjQyNmRjXkEyXkFqcGdeQXVyMTY3ODE5NTY1._V1_QL75_UY562_CR35,0,380,562_.jpg'
    },
    {
      title: 'Silent Night',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BN2ZjNDg4ZGQtZTY4NC00MWVmLTk4ZmEtYjc1NWRkZWRjMWUwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_QL75_UX380_CR0,4,380,562_.jpg'
    },
    {
      title: 'Candy Cane Lane',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTU3MWYzNzEtZmYwNS00ZjhjLTljMTQtYzk5NTk1ZTJkYTZjXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_QL75_UX380_CR0,0,380,562_.jpg'
    },
    {
      title: 'The Archies',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BOGZmOTUxYTYtOGExOC00ZjAwLTk5MTItN2Q3ZjIyYTYzY2Y0XkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_QL75_UY562_CR35,0,380,562_.jpg'
    },
    {
      title: 'Poor Things',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,0,380,562_.jpg'
    },
    {
      title: 'Leave the World Behind',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTUzM2I3NDEtMjNhYi00NTQ0LThmZDItZTMyMzM2MjJmZGRjXkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_QL75_UX380_CR0,4,380,562_.jpg'
    },
    {
      title: 'Eileen',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZjAxNDA2MmMtNTk1Ni00N2RhLWE4ZjYtYWM2YWYxMzc3YjE4XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_QL75_UY562_CR0,0,380,562_.jpg'
    },
    {
      title: 'Kimitachi wa dô ikiru ka',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZjZkNThjNTMtOGU0Ni00ZDliLThmNGUtZmMxNWQ3YzAxZTQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UY562_CR2,0,380,562_.jpg'
    }
  ];

  trendingActors: FriendItemComponent[] = [
    {
      friendName: 'Vanessa Kirby',
      profilePictureUrl: 'https://m.media-amazon.com/images/M/MV5BYzUzNjkwMjMtODRiNi00ZTliLWE3Y2ItMDJmZmFmNjg1YTMyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UY2669_.jpg'
    },
    {
      friendName: 'Tom Blyth',
      profilePictureUrl: 'https://m.media-amazon.com/images/M/MV5BOWVjOTVlMTQtMTQ2Ni00NGJiLWEzMTYtN2UxYTI0ZjE1NTczXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX960_.jpg'
    },
    {
      friendName: 'Elizabeth Debicki',
      profilePictureUrl: 'https://m.media-amazon.com/images/M/MV5BMWRiNzczYzMtOGE1Yi00Njg0LWFkNTUtYzE3NmVkZDZkMjg5XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX450_.jpg'
    },
    {
      friendName: 'Rachel Zegler',
      profilePictureUrl: 'https://m.media-amazon.com/images/M/MV5BMjQyNzg3MDQ2OF5BMl5BanBnXkFtZTgwMDAzNjcxNzM@._V1_FMjpg_UX400_.jpg'
    }
  ];
}
