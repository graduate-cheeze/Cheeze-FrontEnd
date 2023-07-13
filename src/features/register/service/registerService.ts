import { axiosWrapper } from '@libs'

interface Request {
  email: string
  password: string
  nickname: string
}

const registerService = async (body: Request) => {
  const res = await axiosWrapper({ method: 'post', url: '/auth', data: body })

  if (res) return false
  return true
}

export default registerService
