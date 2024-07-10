import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { get } from 'site/services/api.service'
import { UseGetProps } from './useGet'

const useGet = <ApiResponseData, QueryResponseData = ApiResponseData>({
  queryKey,
  route,
  select,
  enabled = true,
}: UseGetProps<ApiResponseData, QueryResponseData>) => {
  return useQuery<ApiResponseData, AxiosError, QueryResponseData>({
    queryKey,
    queryFn: () => get(route),
    select,
    enabled,
  })
}

export default useGet
