interface Props extends PhotoType {}

const PhotoCard = ({ title, imageUrl, day, writer }: Props) => {
  return (
    <div className='w-80 h-[25rem] p-4 rounded-2xl shadow-[rgba(0,0,0,0.12)] shadow-md flex flex-col gap-4'>
      <div className='w-72 h-72 relative'>
        <img
          src={imageUrl}
          alt={title}
          className='w-72 h-72 object-cover rounded-lg'
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
  )
}

export default PhotoCard
