import Tilt from 'react-parallax-tilt'

interface Props extends ImageType {
  idx: number
}

const DetailPhotoCard = ({ idx, title, imageUrl, day, writer }: Props) => {
  return (
    <Tilt>
      <div className='w-[23.5rem] p-4 pb-9 rounded-2xl shadow-[rgba(0,0,0,0.12)] shadow-md flex flex-col gap-4 bg-WHITE'>
        <div className='overflow-scroll flex flex-row'>
          <div className='relative min-w-[21.5rem]'>
            <img
              src={imageUrl[idx]}
              alt='image detail'
              className='w-full h-full aspect-square object-cover rounded-lg'
            />
            <p className='w-10 h-6 flex justify-center items-center rounded text-WHITE font-medium text-sm absolute bottom-2 right-2 bg-[rgba(0,0,0,0.30)]'>
              {idx + 1}/{imageUrl.length}
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='text-N40 font-medium text-sm'>
            {writer} • {day}일전
          </p>
          <h3 className='text-BLACK font-bold text-base'>{title[idx]}</h3>
        </div>
      </div>
    </Tilt>
  )
}

export default DetailPhotoCard
