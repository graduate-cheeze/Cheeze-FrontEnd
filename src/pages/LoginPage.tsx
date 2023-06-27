import * as L from '@layouts'
import { LoginTemplate } from '@features/login/templates'

const LoginPage = () => {
  return (
    <L.AuthLayout>
      <LoginTemplate />
    </L.AuthLayout>
  )
}

export default LoginPage
