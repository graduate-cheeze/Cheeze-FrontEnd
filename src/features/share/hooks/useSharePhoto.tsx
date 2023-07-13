import { useContext } from 'react'
import { PhotoContext } from '@features/share/providers/PhotosProvider'

const useSharePhoto = () => {
  const { photos } = useContext(PhotoContext)
  const onShare = () => {
    photos
  }

  return { onShare }
}

export default useSharePhoto
