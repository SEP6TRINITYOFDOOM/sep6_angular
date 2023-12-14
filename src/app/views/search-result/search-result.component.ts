import {Component, Input, OnInit} from '@angular/core';
import { SearchService } from '../../services/search.service';
import {SearchResult} from "../../services/Search DTO/SearchResult";
import {Actor} from "../../services/Actor DTO/Actor";
import {Movie} from "../../services/Movie DTO/Movie";
import {ActivatedRoute, Router} from "@angular/router";
import {Friend} from "../../services/user.dto/user";
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {

  @Input() searchParam: any = '';
  public searchQueryParam: any = '';

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public searchResult : SearchResult = new class implements SearchResult {
    actorResults: Actor[] = [];
    movieResults: Movie[] = []
    genres: number[] = []
    users: Friend[] = []
  }

  ngOnInit() {

    this.searchParam = this.activatedRoute.snapshot.paramMap.get("searchParam");
    this.searchQueryParam = this.activatedRoute.snapshot.queryParamMap.get("genre");

    if(this.searchQueryParam == null){
      this.searchService.getSearchResult(this.searchParam).subscribe(
        data => this.searchResult = data
      );
    } else {
      this.searchService.searchWithGenre(this.searchParam, this.searchQueryParam).subscribe(
        data => this.searchResult = data
      );
    }
  }

  sortByGenre(genreId: number){
    this.router.navigate(['/','search',this.searchParam], {
      queryParams: { genre: genreId}
    });
    window.location.replace(location.pathname + "?genre=" + genreId);
  }
  public genre_ids : number[] = [];

  public movieGenreDictionary: Map<number, string> = new Map([
    [28,'Action'],
    [12,'Adventure'],
    [16,'Animation'],
    [35,'Comedy'],
    [80,'Crime'],
    [99,'Documentary'],
    [18,'Drama'],
    [10751,'Family'],
    [14,'Fantasy'],
    [36,'History'],
    [27,'Horror'],
    [10402,'Music'],
    [9648,'Mystery'],
    [10749,'Romance'],
    [878,'Science Fiction'],
    [10770,'TV Movie'],
    [53,'Thriller'],
    [10752,'War'],
    [37,'Western']
  ]);

  refreshGenres(){
    for (let i = 0; i < this.searchResult.movieResults.length; i++) {
      for (let j = 0; j < this.searchResult.movieResults[i].genre_ids[j]; j++) {
        if(!this.genre_ids.some(el => el === this.searchResult.movieResults[i].genre_ids[j])) {
          this.genre_ids.push(this.searchResult.movieResults[i].genre_ids[j]);
        }
      }
    }
  }



}
