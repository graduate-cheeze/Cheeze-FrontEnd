import * as L from '@layouts'
import { LoginTemplate } from '@features/login/templates'
import { useLoggedIn } from '@features/auth'

const LoginPage = () => {
  useLoggedIn({ redirectToIfFound: '/' })

  return (
    <L.AuthLayout>
      <LoginTemplate />
    </L.AuthLayout>
  )
}

export default LoginPage
