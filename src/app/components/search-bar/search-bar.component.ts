import {Component} from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs/operators';
import { SearchService } from '../ServiceSearch/search.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';

  constructor(private searchService: SearchService, private router: Router) {
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {

      });
  }

  search(): void {

    this.searchService.sendSearchTerm(this.searchTerm);


    let expectedRoute = "/search";


    let currentRoute = this.router.url;


    if (currentRoute !== expectedRoute) {
      this.router.navigate([expectedRoute]);
    } else {

      this.handleNavigation();
    }
  }

  private handleNavigation(): void {

    console.log('Navigation completed. Run your code here.');
  }
}
