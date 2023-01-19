export type Publisher = {
    id: number,
    name: string
}

export interface Game {
  id: number
  name: string
  publisher: Publisher[] 
}
