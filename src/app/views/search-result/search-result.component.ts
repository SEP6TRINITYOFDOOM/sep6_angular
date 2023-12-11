import {Component, OnInit} from '@angular/core';
import { SearchService } from '../../components/ServiceSearch/search.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {

  panelOpenState = false;
  isContentVisibleButton: boolean = false;
  isContentVisibleComedy: boolean = false;
  isContentVisibleAction: boolean = false;
  isContentVisibleRomance: boolean = false;
  isContentVisibleHorror: boolean = false;
  isContentVisibleAllMovie: boolean = true;
  isContentVisibleSearchImage: boolean = false;

  ContentVisibility(): void {
    this.isContentVisibleComedy = true;
    this.isContentVisibleAction = false;
    this.isContentVisibleRomance = false;
    this.isContentVisibleHorror = false;
  }

  ContentVisibility1(): void {
    this.isContentVisibleAction = true;
    this.isContentVisibleComedy = false;
    this.isContentVisibleRomance = false;
    this.isContentVisibleHorror = false;
  }

  ContentVisibility2(): void {
    this.isContentVisibleRomance = true;
    this.isContentVisibleComedy = false;
    this.isContentVisibleAction = false;
    this.isContentVisibleHorror = false;
  }

  ContentVisibility3(): void {
    this.isContentVisibleHorror = true;
    this.isContentVisibleComedy = false;
    this.isContentVisibleAction = false;
    this.isContentVisibleRomance = false;
  }

  searchUrl: string = '';
  searchTitle: string = '';
  searchUrl1: string = '';
  searchTitle1: string = '';
  searchUrl2: string = '';
  searchTitle2: string = '';

  constructor(private searchService: SearchService) {
  }

    ngOnInit(): void {

      this.searchService.searchObservable$.subscribe((searchResults) => {
        const firstResult = (searchResults as { title: string; url: string }[])[0];
        const secondResult = (searchResults as { title: string; url: string }[])[1];
        const thirdResult = (searchResults as { title: string; url: string }[])[2];
        if (firstResult && secondResult && thirdResult) {
          this.searchTitle = firstResult.title;
          this.searchUrl = firstResult.url;
          this.searchTitle1 = secondResult.title;
          this.searchUrl1 = secondResult.url;
          this.searchTitle2 = thirdResult.title;
          this.searchUrl2 = thirdResult.url;
          this.isContentVisibleSearchImage = true;

          if (this.searchUrl !== '') {
            this.isContentVisibleAllMovie = false;
            this.isContentVisibleButton = true;
          }
        } else {
          this.searchTitle = '';
          this.searchUrl = '';
          this.isContentVisibleSearchImage = false;
          this.isContentVisibleAllMovie = true;
          this.isContentVisibleButton = false;
        }
      });
    }

    BackToMovie(){
    this.isContentVisibleSearchImage = false;
    this.isContentVisibleButton = false;
    this.isContentVisibleAllMovie = true;
}
}
