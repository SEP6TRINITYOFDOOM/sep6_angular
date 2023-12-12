import {Movie} from "../Movie DTO/Movie";
import {Actor} from "../Actor DTO/Actor";

export interface SearchResult {
  movieResults: Movie[],
  actorResults: Actor[],
  genres: number[]
}
