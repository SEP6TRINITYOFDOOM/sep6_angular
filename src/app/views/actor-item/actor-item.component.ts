import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent {
  @Input() actorName: string = "";
  @Input() profilePictureUrl: string = '';
  @Input() actorId: number = 0;


  constructor(private router: Router) {
  }
  navigateToProfile() {

    this.router.navigate(['/actor-details',this.actorId])
  }
}
