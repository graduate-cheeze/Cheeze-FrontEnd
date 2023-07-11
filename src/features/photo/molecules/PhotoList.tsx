import { PhotoCard } from '@features/photo'

const PhotoList = () => {
  return (
    <div className='mx-auto w-full max-w-[20rem] md:max-w-[41rem] lg:max-w-[62rem] xl:max-w-[83rem] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {[...Array(10)].map((_, idx) => (
        <PhotoCard
          key={idx}
          title='hello world'
          writer='곽희상'
          day={1}
          id={34}
          imageUrl='https://s3.ap-northeast-2.amazonaws.com/msg-bucket-official/PROJECT/b406bd12-b0e1-4b84-b979-5c747243156eIMG_0393.jpg'
        />
      ))}
    </div>
  )
}

export default PhotoList
