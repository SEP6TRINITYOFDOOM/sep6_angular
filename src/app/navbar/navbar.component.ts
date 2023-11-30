import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() sideNavOpen!: boolean;
  @Output() sideNavStateChange = new EventEmitter<boolean>();

  toggle(){
    this.sideNavOpen = !this.sideNavOpen;
    this.sideNavStateChange.emit(this.sideNavOpen);
  }

}
