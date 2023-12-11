import {Component, Input} from '@angular/core';
import {MovieItemComponent} from "../movie-item/movie-item.component";
import {FriendItemComponent} from "../friend-item/friend-item.component";
import {HttpClient} from "@angular/common/http";
import {MoviesService} from "../../service/movies.service";
import {ActorsService} from "../../service/actors.service";
import {Movie} from "../../service/Movie DTO/Movie";
import {Actor} from "../../service/Actor DTO/Actor";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private moviesService: MoviesService, private actorService: ActorsService) {
  }
  public movies: Movie[] = [];
  public actors: Actor[] = [];

  ngOnInit() {
    this.moviesService.getTrending().subscribe(
      data=> this.movies = data
    );

    this.actorService.getTrending().subscribe(
      data => this.actors = data
    );
  }

}
