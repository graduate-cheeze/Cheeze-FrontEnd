import { Button } from '@features/global'
import { Molecules } from '@features/share'
import { Atoms } from '@features/share'
import { usePhotos, useSharePhoto } from '@features/share/hooks'
import { useContext } from 'react'
import { PhotoContext } from '@features/share/providers/PhotosProvider'

const ShareTemplate = () => {
  const { removePhoto } = useContext(PhotoContext)
  const { photos } = usePhotos()
  const { onShare } = useSharePhoto()

  return (
    <div className='mt-40 flex flex-col gap-14 items-center'>
      <Molecules.FileInput>
        {photos.map((i) => (
          <Atoms.Image key={i} src={i} onDelete={() => removePhoto(i)} />
        ))}
      </Molecules.FileInput>
      <Button onClick={onShare} className='max-w-[10rem]'>
        다음
      </Button>
    </div>
  )
}
export default ShareTemplate
