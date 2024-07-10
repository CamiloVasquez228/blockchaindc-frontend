import { FilmResponse } from 'site/types/Film'

export interface FilmData {
  title: string
  id: string | null
}

export interface FilmsApiResponse {
  count: number
  next: number | null
  previous: number | null
  results: FilmResponse[]
}
