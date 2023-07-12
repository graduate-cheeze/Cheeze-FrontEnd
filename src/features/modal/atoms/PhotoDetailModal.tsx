import { Libs } from '@features/modal'
import { PhotoCard } from '@features/photo'
import * as SVG from '@assets/svg'

const PhotoDetailModal = () => {
  return (
    <Libs.Modal>
      <div className='flex gap-4'>
        <PhotoCard
          title='hello world'
          writer='곽희상'
          day={1}
          id={34}
          imageUrl='https://s3.ap-northeast-2.amazonaws.com/msg-bucket-official/PROJECT/b406bd12-b0e1-4b84-b979-5c747243156eIMG_0393.jpg'
        />
        <div className='flex flex-col gap-4 justify-end'>
          <span className='p-2 rounded-full bg-WHITE cursor-pointer'>
            <SVG.ArrowLeft />
          </span>
          <span className='p-2 rounded-full bg-WHITE cursor-pointer'>
            <SVG.ArrowRight />
          </span>
        </div>
      </div>
    </Libs.Modal>
  )
}

export default PhotoDetailModal
