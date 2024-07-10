import { useQueries, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { get } from 'site/services/api.service'

const useGetFilmItems = <T,>(routes: string[]) => {
  const { data } = useQueries({
    queries: routes.map<UseQueryOptions<T, AxiosError>>((route) => ({
      queryKey: ['GetFilmItems', route],
      queryFn: () => get(route),
    })),
    combine: (results) => {
      const filteredData = results
        .filter((result) => !result.isLoading && result.data !== undefined)
        .map((result) => result.data as T)

      return {
        data: filteredData,
      }
    },
  })

  return { data }
}

export default useGetFilmItems
