import { Header } from '@features/global'
import { PhotoCard } from '@features/photo'

const MainPage = () => {
  return (
    <div>
      <Header />
      <PhotoCard
        title='hello world'
        writer='곽희상'
        day={1}
        id={34}
        imageUrl='https://s3.ap-northeast-2.amazonaws.com/msg-bucket-official/PROJECT/b406bd12-b0e1-4b84-b979-5c747243156eIMG_0393.jpg'
      />
    </div>
  )
}

export default MainPage
