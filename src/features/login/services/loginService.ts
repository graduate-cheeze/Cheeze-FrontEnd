import { axiosWrapper } from '@libs'

interface Request {
  email: string
  password: string
}

interface Response {
  accessToken: string
  refreshToken: string
  accessExp: string
  refreshExp: string
}

const loginService = async (body: Request) => {
  const res = await axiosWrapper<Response>({ method: 'get', data: body })
  if (!res) return
  return res.data
}

export default loginService
