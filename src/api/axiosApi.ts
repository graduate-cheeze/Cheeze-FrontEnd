import env from '@libs/env'
import axios, { isAxiosError } from 'axios'
import TokenManager from './lib/TokenManager'
import needsTokenRefresh from './lib/needsTokenRefresh'

const axiosApi = axios.create({ baseURL: env.VITE_SERVER_URL })

axiosApi.interceptors.request.use(async (config) => {
  const tokenManager = new TokenManager()
  let isSuccessed = true
  const needsRefresh = needsTokenRefresh(config.url, config.method)

  if (needsRefresh) isSuccessed = await tokenManager.reissueToken()

  if (!isSuccessed) return { ...config, signal: AbortSignal.abort() }

  config.headers['Authorization'] =
    tokenManager.accessToken && needsRefresh
      ? `Bearer ${tokenManager.accessToken}`
      : undefined

  return config
})

axiosApi.interceptors.response.use(
  (config) => {
    return config
  },
  async (config) => {
    if (!isAxiosError(config)) return Promise.reject(config)

    if (config.response?.status === 401) TokenManager.clearToken()

    return Promise.reject(config)
  }
)

export default axiosApi
