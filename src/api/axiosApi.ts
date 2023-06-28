import env from '@libs/env'
import axios from 'axios'

const axiosApi = axios.create({ baseURL: env.VITE_SERVER_URL })

export default axiosApi
