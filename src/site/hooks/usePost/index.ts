import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { post } from 'site/services/api.service'
import { APIResponse } from 'site/types/Api'
import { UsePostProps } from './usePost'

const usePost = <Body, Response = null>({
  route,
  mutationKey,
  onSuccess,
  onError,
}: UsePostProps<Body, Response>) => {
  return useMutation<APIResponse<Response>, AxiosError, Body>({
    mutationFn: (body) => post<Body>(route, body),
    mutationKey,
    onSuccess,
    onError,
    retry: false,
  })
}

export default usePost
