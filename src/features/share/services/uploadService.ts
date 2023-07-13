import { axiosWrapper } from '@libs'

interface Response {
  imageUrl: string[]
}

const uploadService = async (body: FormData) => {
  const res = await axiosWrapper<Response>({
    method: 'post',
    url: '/image',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: body,
  })

  return res?.data
}

export default uploadService
