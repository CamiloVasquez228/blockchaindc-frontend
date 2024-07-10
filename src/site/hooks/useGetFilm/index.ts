import { FilmResponse } from 'site/types/Film'
import { VITE_API_BASE_URL_PARTE_1 } from 'site/utils/constants/environments.constants'
import useGet from '../useGet'

const useGetFilm = (id: string) => {
  const { data } = useGet<FilmResponse>({
    queryKey: ['GetFilm', id],
    route: `${VITE_API_BASE_URL_PARTE_1}/films/${id}`,
  })

  return { data }
}

export default useGetFilm
