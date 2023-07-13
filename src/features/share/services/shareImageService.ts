import { axiosWrapper } from '@libs'

interface Request {
  titles: string[]
  imageUrls: string[]
}

const shareImageService = async (body: Request) => {
  const res = await axiosWrapper({
    method: 'post',
    url: '/image/share',
    data: body,
  })

  if (res) return true
  return false
}

export default shareImageService
