import { Header } from '@features/global'
import { usePhotos } from '@features/photo/hooks'
import { Templates } from '@features/share'

const SharePage = () => {
  const { data } = usePhotos()

  return (
    <>
      <Header nickname={data?.nickName} />
      <Templates.ShareTemplate />
    </>
  )
}

export default SharePage
