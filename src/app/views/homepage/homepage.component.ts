import {Component, Input} from '@angular/core';
import {MovieItemComponent} from "../movie-item/movie-item.component";
import {FriendItemComponent} from "../friend-item/friend-item.component";
import {HttpClient} from "@angular/common/http";
import {MoviesService} from "../../services/movies.service";
import {ActorsService} from "../../services/actors.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private moviesService: MoviesService, private actorService: ActorsService) {
  }

  trendingMovies : any;
  trendingActors : any;
  ngOnInit() {
    this.moviesService.getTrending().subscribe(
      (response) => { this.trendingMovies = response; },
      (error) => { console.log(error); }
    );

    this.actorService.getTrending().subscribe(
      (response) => { this.trendingActors = response; },
      (error) => { console.log(error); }
    );
  }

}
