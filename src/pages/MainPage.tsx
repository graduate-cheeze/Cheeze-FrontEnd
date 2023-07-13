import { Header } from '@features/global'
import { PhotoList } from '@features/photo'
import { usePhotos } from '@features/photo/hooks'
import { MainPageLayout } from '@layouts'

const MainPage = () => {
  const { data } = usePhotos()

  return (
    <MainPageLayout>
      <Header nickname={data?.nickName} />
      <PhotoList images={data?.image} />
    </MainPageLayout>
  )
}

export default MainPage
