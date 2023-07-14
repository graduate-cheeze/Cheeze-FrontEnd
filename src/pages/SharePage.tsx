import { useLoggedIn } from '@features/auth'
import { Header } from '@features/global'
import { Templates } from '@features/share'

const SharePage = () => {
  useLoggedIn({ redirectTo: '/' })

  return (
    <>
      <Header />
      <Templates.ShareTemplate />
    </>
  )
}

export default SharePage
