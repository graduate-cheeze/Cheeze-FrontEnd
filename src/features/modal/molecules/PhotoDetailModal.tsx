import { Atoms, Libs } from '@features/modal'
import * as SVG from '@assets/svg'

interface Props extends ImageType {}

const PhotoDetailModal = ({ title, writer, day, id, imageUrl }: Props) => {
  return (
    <Libs.Modal>
      <div className='flex gap-4'>
        <Atoms.DetailPhotoCard
          title={title}
          writer={writer}
          day={day}
          id={id}
          imageUrl={imageUrl}
        />
        <div className='flex flex-col gap-4 justify-end'>
          <span className='p-2 rounded-full bg-WHITE'>
            <SVG.ArrowLeft />
          </span>
          <span className='p-2 rounded-full bg-WHITE'>
            <SVG.ArrowRight />
          </span>
        </div>
      </div>
    </Libs.Modal>
  )
}

export default PhotoDetailModal
