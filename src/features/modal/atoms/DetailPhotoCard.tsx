import { PhotoDetailModal } from '@features/modal/molecules'
import { ModalContext } from '@features/modal/provider/ModalProvider'
import { useContext } from 'react'
import Tilt from 'react-parallax-tilt'

interface Props extends PhotoType {}

const DetailPhotoCard = ({ title, imageUrl, day, writer }: Props) => {
  const { open } = useContext(ModalContext)

  return (
    <Tilt>
      <div
        onClick={() => open(<PhotoDetailModal />)}
        className='w-[23.5rem] p-4 pb-9 rounded-2xl shadow-[rgba(0,0,0,0.12)] shadow-md flex flex-col gap-4 bg-WHITE'
      >
        <div className='relative'>
          <img
            src={imageUrl}
            alt={title}
            className='w-full aspect-square object-cover rounded-lg'
          />
          <p className='w-10 h-6 flex justify-center items-center rounded text-WHITE font-medium text-sm absolute bottom-2 right-2 bg-[rgba(0,0,0,0.30)]'>
            1/5
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='text-N40 font-medium text-sm'>
            {writer} • {day}일전
          </p>
          <h3 className='text-BLACK font-bold text-base'>{title}</h3>
        </div>
      </div>
    </Tilt>
  )
}

export default DetailPhotoCard
