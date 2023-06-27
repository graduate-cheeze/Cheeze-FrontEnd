import { Input } from '@features/login/atoms'
import * as Icon from '@assets/svg'

const LoginInputs = () => {
  return (
    <div className='w-full space-y-2'>
      <Input
        placeholder='이메일'
        icon={<Icon.Mail />}
        activeIcon={<Icon.Mail isActive />}
      />
      <Input
        placeholder='비밀번호'
        type='password'
        icon={<Icon.Pw />}
        activeIcon={<Icon.Pw isActive />}
      />
    </div>
  )
}

export default LoginInputs
