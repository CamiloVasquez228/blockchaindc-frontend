export interface UseGetProps<
  ApiResponseData,
  QueryResponseData = ApiResponseData,
> {
  queryKey: (string | number)[]
  route: string
  select?: (response: ApiResponseData) => QueryResponseData
  enabled?: boolean
}
