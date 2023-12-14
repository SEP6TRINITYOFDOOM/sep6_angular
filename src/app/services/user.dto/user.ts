export interface User{
  username: string;
  id: number;
}

export interface Friend{
  status: string
  id: number
  user: User
  requesterId: number
}
