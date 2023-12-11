import {KnownFor} from "./KnownFor";

export interface Actor {
  adult: boolean
  id: number
  name: string
  original_name: string
  media_type: string
  popularity: number
  gender: number
  known_for_department: string
  profile_path: string
  known_for: KnownFor[]
}

