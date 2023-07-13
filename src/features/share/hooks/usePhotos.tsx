import { ChangeEvent, useContext } from 'react'
import { Services } from '@features/share'
import { PhotoContext } from '@features/share/providers/PhotosProvider'

const usePhotos = () => {
  const { photos, addPhoto } = useContext(PhotoContext)

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (photos.length >= 4) return

    const formData = new FormData()
    if (!e.target.files || !e.target.files[0]) return

    formData.append('file', e.target.files[0])
    const res = await Services.uploadService(formData)
    if (!res) return

    addPhoto(res.imageUrl[0])
  }

  return { photos, onChange }
}

export default usePhotos
