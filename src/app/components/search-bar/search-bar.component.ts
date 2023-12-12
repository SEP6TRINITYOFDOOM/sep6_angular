import {Component} from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
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

    const inputElement = <HTMLInputElement>document.getElementById("search-field");

    let expectedRoute = "/search/" + inputElement.value;


    let currentRoute = this.router.url;


    if (currentRoute !== expectedRoute) {
      this.router.navigate(['/']).then(() => { this.router.navigate([expectedRoute]); })
    } else {
      this.handleNavigation();
    }
  }

  private handleNavigation(): void {

    console.log('Navigation completed. Run your code here.');
  }
}
