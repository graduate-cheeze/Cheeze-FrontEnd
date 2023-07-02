import env from '@libs/env'
import axios from 'axios'
import ReissueResType from '@api/type/ReissueResType'

const reissue = async (refreshToken: string) => {
  try {
    const { data } = await axios.patch<ReissueResType>(
      '/auth',
      {},
      {
        baseURL: env.VITE_SERVER_URL,
        headers: {
          'Refresh-Token': refreshToken,
        },
      }
    )

    return data
  } catch (e) {
    return
  }
}

export default reissue
