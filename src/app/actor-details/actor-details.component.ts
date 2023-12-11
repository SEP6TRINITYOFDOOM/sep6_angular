import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit{

  @Input() id = "";

  ngOnInit(): void {

  }

}
