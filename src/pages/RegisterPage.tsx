import * as L from '@layouts'
import { RegisterTemplate } from '@features/register/templates'

const RegisterPage = () => {
  return (
    <L.AuthLayout>
      <RegisterTemplate />
    </L.AuthLayout>
  )
}

export default RegisterPage
