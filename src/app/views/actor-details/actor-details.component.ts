import {Component, Input, OnInit} from '@angular/core';
import {ActorDetails} from "../../services/Actor DTO/ActorDetails";
import {ActorService} from "../../components/Server/actor.service";


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
    also_known_as: string[] = [];
    adult: boolean = false;
    biography: string = "";
    birthday: string = "";
    deathday: string = "";
    gender: number = 0;
    homepage: string = "";
    id: number = 0;
    imdb_id: string = "";
    known_for_department: string = "";
    name: string = "";
    place_of_birth: string = "";
    popularity: number = 0;
    profile_path: string = "";
  }

  ngOnInit(): void {
    console.log("ID=" + this.id);

    this.actorService.getActorDetails(this.id).subscribe(
      data => this.actorDetails = data
    );
  }

}
