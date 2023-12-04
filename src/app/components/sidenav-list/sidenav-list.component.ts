import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent {

  @Output() sideNavClose = new EventEmitter();

  public onSideNavClose = () => {
    this.sideNavClose.emit();
  }

}
