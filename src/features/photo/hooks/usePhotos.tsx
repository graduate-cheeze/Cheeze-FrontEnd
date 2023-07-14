import { useQuery } from 'react-query'
import { photosService } from '..'

const usePhotos = () => {
  const { data } = useQuery('/user', photosService, {
    suspense: true,
    refetchInterval: 60 * 1000,
  })

  return {
    data,
  }
}

export default usePhotos
