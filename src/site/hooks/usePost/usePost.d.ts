import { MutationKey } from '@tanstack/react-query'

export interface UsePostProps<Body, Response> {
  route: string
  mutationKey: MutationKey
  onSuccess?: (response: APIResponse<Response>, body: Body) => void
  onError?: (error: AxiosError<ErrorResponse>) => void
}
