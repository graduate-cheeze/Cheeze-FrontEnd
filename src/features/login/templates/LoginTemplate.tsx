import * as Icon from '@assets/svg'
import { Button } from '@features/login/atoms'
import { LoginInputs } from '@features/login/molecules'
import { Link } from 'react-router-dom'

const LoginTemplate = () => {
  return (
    <div className='w-[28.5rem] bg-WHITE p-12 rounded-3xl flex items-center flex-col'>
      <span className='mb-8'>
        <Icon.CheezeLogo />
      </span>

      <LoginInputs />

      <Button className='mt-10'>로그인</Button>

      <div className='font-semibold text-sm flex gap-2 mt-4'>
        <p className='text-N30'>Cheeze가 처음인가요?</p>
        <Link className='text-BLACK' to='/register'>
          회원가입
        </Link>
      </div>
    </div>
  )
}

export default LoginTemplate
