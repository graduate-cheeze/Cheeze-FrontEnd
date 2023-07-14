import { useLoggedIn } from '@features/auth'
import { Header, Loading } from '@features/global'
import { PhotoList } from '@features/photo'
import { MainPageLayout } from '@layouts'
import { Suspense } from 'react'

const MainPage = () => {
  useLoggedIn({ redirectTo: '/login' })

  return (
    <MainPageLayout>
      <Suspense fallback={<Loading />}>
        <Header />
        <PhotoList />
      </Suspense>
    </MainPageLayout>
  )
}

export default MainPage
