import * as L from '@layouts'
import { RegisterTemplate } from '@features/register/templates'
import { useLoggedIn } from '@features/auth'

const RegisterPage = () => {
  useLoggedIn({ redirectToIfFound: '/' })

  return (
    <L.AuthLayout>
      <RegisterTemplate />
    </L.AuthLayout>
  )
}

export default RegisterPage
