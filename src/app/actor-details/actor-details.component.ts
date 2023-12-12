import {Component, Input, OnInit} from '@angular/core';
import {ActorDetails} from "../service/Actor DTO/ActorDetails";
import {ActorService} from "../components/Server/actor.service";
import {MoviesService} from "../service/movies.service";


@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit{

  @Input() id = "";

  constructor(private actorService: ActorService) {
  }

  public actorDetails : ActorDetails = new class implements ActorDetails {
    adult: boolean = false;
    biography: string = "";
    birthday: string = "";
    deathday: string = "";
    gender: string = "";
    homepage: string = "";
    id: number = 0;
    imdb_id: number = 0;
    known_for_department: string = "";
    name: string = "";
    place_of_birth: string = "";
    popularity: number = 0;
    profile_path: string = "";
    country: string = "";
    movie_path: string = "";
  }

  ngOnInit(): void {

  }

}
