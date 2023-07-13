import { axiosWrapper } from '@libs'

interface Request {
  email: string
  password: string
  nickName: string
}

const registerService = async (body: Request) => {
  const res = await axiosWrapper({ method: 'post', url: '/auth', data: body })

  if (res) return true
  return false
}

export default registerService
