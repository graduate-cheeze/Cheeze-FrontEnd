import { axiosWrapper } from '@libs'

interface Response {
  nickname: string
  image: ImageType[]
}

const photosService = async () => {
  const res = await axiosWrapper<Response>({ method: 'get', url: '/user' })
  if (res) return res.data
}

export default photosService