import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() title: string = '';
  @Input() posterURL: string = '';
  @Input() character: string = '';
}
