import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  private searchSubject = new Subject<{ title: string; url: string } | { title: string; url: string }[]>();

  searchObservable$ = this.searchSubject.asObservable();

  sendSearchTerm(searchTerm: string): void {
    let lowerCaseSearchTerm = searchTerm.toLowerCase();
    let searchResults: { title: string, url: string }[] = [];
    if (lowerCaseSearchTerm === 'the gold rush') {
      searchResults.push({ title: 'The Gold Rush', url: 'assets/image/comedy1.png' });
      searchResults.push({ title: 'Charlie Chaplin', url: 'assets/image/comedy1CharlieChaplin.png' });
      searchResults.push({ title: 'Georgia Hale', url: 'assets/image/comedy1GeorgiaHale.png' });

    } else if (lowerCaseSearchTerm === 'spun') {
      searchResults.push({ title: 'Spun', url: 'assets/image/comedy2.png' });
      searchResults.push({ title: 'Jason Schwartzman', url: 'assets/image/comedy2JasonSchwartzman.png' });
      searchResults.push({ title: 'Mickey Rourke', url: 'assets/image/comedy2MickeyRourke.png' });

    } else if (lowerCaseSearchTerm === 'Attack of the Killer Tomatoes!') {
      searchResults.push({ title: 'Attack of the Killer Tomatoes!', url: 'assets/image/comedy3.png' });

    } else if (lowerCaseSearchTerm === 'direct action') {
      searchResults.push({ title: 'Direct Action', url: 'assets/image/action1.png' });

    } else if (lowerCaseSearchTerm === 'nosferatu') {
      searchResults.push({ title: 'Nosferatu', url: 'assets/image/horror2.png' });

    } else {

      searchResults = [];
    }
    this.searchSubject.next(searchResults);
}

}
