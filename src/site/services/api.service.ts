import axiosInstance from 'config/axios/axios.config'

export const get = async (path: string) => {
  const { data } = await axiosInstance.get(path)

  return data
}

export const post = async <Body>(path: string, body: Body) => {
  const { data } = await axiosInstance.post(path, body)

  return data
}
