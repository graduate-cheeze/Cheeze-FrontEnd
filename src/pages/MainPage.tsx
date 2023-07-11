import { Header } from '@features/global'
import { PhotoList } from '@features/photo'
import { MainPageLayout } from '@layouts'

const MainPage = () => {
  return (
    <MainPageLayout>
      <Header />
      <PhotoList />
    </MainPageLayout>
  )
}

export default MainPage
