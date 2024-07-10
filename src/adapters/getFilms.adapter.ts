import { FilmData, FilmsApiResponse } from 'site/hooks/useGetFilms/useGetFilms'
import { getNumberFromString } from 'site/utils/helpers/getNumberFromString.helper'

export const filmsApiResponseToFilmData = ({
  results,
}: FilmsApiResponse): FilmData[] =>
  results.map(({ title, url }) => ({
    title,
    id: getNumberFromString(url),
  }))
