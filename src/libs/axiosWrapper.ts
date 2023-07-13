import axiosApi from '@api/axiosApi'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import ErrorMapper from './ErrorMapper'

const axiosWrapper = async <Res>(
  config: AxiosRequestConfig,
  errors?: Errors
): Promise<AxiosResponse<Res, any> | undefined> => {
  try {
    const res = await axiosApi<Res>(config)
    return res
  } catch (e) {
    console.info(ErrorMapper(e, errors))
  }
}

export default axiosWrapper
