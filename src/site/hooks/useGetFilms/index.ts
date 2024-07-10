import { filmsApiResponseToFilmData } from 'adapters/getFilms.adapter'
import { VITE_API_BASE_URL_PARTE_1 } from 'site/utils/constants/environments.constants'
import useGet from '../useGet'
import { FilmData, FilmsApiResponse } from './useGetFilms'

const useGetFilms = () => {
  const { data } = useGet<FilmsApiResponse, FilmData[]>({
    queryKey: ['GetFilms'],
    route: `${VITE_API_BASE_URL_PARTE_1}/films`,
    select: filmsApiResponseToFilmData,
  })

  return { data }
}

export default useGetFilms
