import { PhotoCard } from '@features/photo'

interface Props {
  images?: ImageType[]
}

const PhotoList = ({ images }: Props) => {
  return (
    <div className='mx-auto w-full max-w-[20rem] md:max-w-[41rem] lg:max-w-[62rem] xl:max-w-[83rem] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {images?.map((i) => (
        <PhotoCard
          key={i.id}
          title={i.title}
          writer={i.writer}
          day={i.day}
          id={i.id}
          imageUrl={i.imageUrl}
        />
      ))}
    </div>
  )
}

export default PhotoList
