import TokenManager from '@api/lib/TokenManager'
import { axiosWrapper } from '@libs'

interface Response {
  imageUrl: string[]
}

const uploadService = async (body: FormData) => {
  const tokenManager = new TokenManager()

  const res = await axiosWrapper<Response>({
    method: 'post',
    url: '/image',
    headers: {
      Authorization: tokenManager.accessToken,
      'Content-Type': 'multipart/form-data',
    },
    data: body,
  })

  return res?.data
}

export default uploadService
