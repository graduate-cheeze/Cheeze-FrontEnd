import { useQuery } from 'react-query'
import { photosService } from '..'

const usePhotos = () => {
  const { data } = useQuery('/user', photosService)

  return {
    data,
  }
}

export default usePhotos
