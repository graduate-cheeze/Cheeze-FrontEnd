import { useContext } from 'react'
import { PhotoContext } from '@features/share/providers/PhotosProvider'
import { TextFieldDialog, useDialog } from '@features/dialog'
import { shareImageService } from '@features/share/services'
import { useNavigate } from 'react-router-dom'

const useSharePhoto = () => {
  const { photos, resetPhoto } = useContext(PhotoContext)
  const { dialog } = useDialog()
  const navigate = useNavigate()

  const onShare = async () => {
    if (photos.length < 1) return

    const title = await dialog(<TextFieldDialog />)
    if (!title) return

    await shareImageService({ titles: [title], imageUrls: photos })
    resetPhoto()
    navigate('/')
  }

  return { onShare }
}

export default useSharePhoto
