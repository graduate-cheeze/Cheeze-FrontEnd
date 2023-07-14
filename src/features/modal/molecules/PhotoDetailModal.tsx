import { Atoms, Libs } from '@features/modal'
import * as SVG from '@assets/svg'
import { useState } from 'react'

interface Props extends ImageType {}

const PhotoDetailModal = ({ title, writer, day, id, imageUrl }: Props) => {
  const [idx, setIdx] = useState<number>(0)

  const countUpIdx = () => setIdx(idx + 1 >= imageUrl.length ? idx : idx + 1)

  const countDownIdx = () => {
    setIdx(idx + 1 <= 1 ? idx : idx - 1)
  }

  return (
    <Libs.Modal>
      <div className='flex gap-4'>
        <Atoms.DetailPhotoCard
          idx={idx}
          title={title}
          writer={writer}
          day={day}
          id={id}
          imageUrl={imageUrl}
        />
        <div className='flex flex-col gap-4 justify-end'>
          <span onClick={countDownIdx} className='p-2 rounded-full bg-WHITE'>
            <SVG.ArrowLeft />
          </span>
          <span onClick={countUpIdx} className='p-2 rounded-full bg-WHITE'>
            <SVG.ArrowRight />
          </span>
        </div>
      </div>
    </Libs.Modal>
  )
}

export default PhotoDetailModal
