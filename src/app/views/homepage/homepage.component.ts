import {Component} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {ActorsService} from "../../services/actors.service";
import {Movie} from "../../services/Movie DTO/Movie";
import {Actor} from "../../services/Actor DTO/Actor";
import {CatFact} from "../../services/catFact";
import {CatTestService} from "../../services/CatTestService";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private moviesService: MoviesService, private actorService: ActorsService, private catFactService: CatTestService) {
  }
  public movies: Movie[] = [];
  public actors: Actor[] = [];
  public catfact: CatFact = {
    fact: "",
    length: 0
  };

  ngOnInit() {
    this.moviesService.getTrending().subscribe(
        data=> this.movies = data
    );

    this.actorService.getTrending().subscribe(
        data => this.actors = data
    );
    this.catFactService.getCatFact().subscribe(
      data =>this.catfact = data
    );
  }


}
