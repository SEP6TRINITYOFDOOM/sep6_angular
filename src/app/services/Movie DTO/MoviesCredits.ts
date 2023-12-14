import {Cast} from "./Cast";
import {Crew} from "./Crew";

export interface MovieCredits {
  cast: Cast[]
  crew: Crew[]
  id: number
}

