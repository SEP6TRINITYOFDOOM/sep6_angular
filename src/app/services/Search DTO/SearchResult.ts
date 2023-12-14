import {Movie} from "../Movie DTO/Movie";
import {Actor} from "../Actor DTO/Actor";
import {Friend} from "../user.dto/user";

export interface SearchResult {
  movieResults: Movie[],
  actorResults: Actor[],
  genres: number[]
  users: Friend[]
}
