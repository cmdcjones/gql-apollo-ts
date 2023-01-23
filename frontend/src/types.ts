export interface Game {
  id: number
  name: string
  publisher: string
  releaseDate: string
  genres: Genre[]
}

export type Genre = {
  id: number
  name: string
}
