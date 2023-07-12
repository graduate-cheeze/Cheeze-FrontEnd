import * as Icon from '@assets/svg'
import { Input } from '@features/login/atoms'
import { Button } from '@features/global'
import { Link } from 'react-router-dom'
import { useLogin } from '@features/login/hooks'

const LoginTemplate = () => {
  const { onSubmit, emailRef, pwRef } = useLogin()

  return (
    <form
      onSubmit={onSubmit}
      className='w-[28.5rem] bg-WHITE p-12 rounded-3xl flex items-center flex-col'
    >
      <span className='mb-8'>
        <Icon.CheezeLogo />
      </span>

      <div className='w-full space-y-2'>
        <Input
          ref={emailRef}
          placeholder='이메일'
          icon={<Icon.Mail />}
          activeIcon={<Icon.Mail isActive />}
        />
        <Input
          ref={pwRef}
          placeholder='비밀번호'
          type='password'
          icon={<Icon.Pw />}
          activeIcon={<Icon.Pw isActive />}
        />
      </div>

      <Button className='mt-10'>로그인</Button>

      <div className='font-semibold text-sm flex gap-2 mt-4'>
        <p className='text-N30'>Cheeze가 처음인가요?</p>
        <Link className='text-BLACK' to='/register'>
          회원가입
        </Link>
      </div>
    </form>
  )
}

export default LoginTemplate
