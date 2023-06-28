import { Button, Input } from '@features/login/atoms'
import { InputWrapper } from '@features/register/molecules'
import * as Icon from '@assets/svg'
import { Link } from 'react-router-dom'

const RegisterTemplate = () => {
  return (
    <div className='w-[28.5rem] bg-WHITE p-12 rounded-3xl flex items-center flex-col'>
      <span className='mb-8'>
        <Icon.CheezeLogo />
      </span>

      <div className='w-full flex flex-col gap-8 mb-10'>
        <InputWrapper label='이메일'>
          <Input placeholder='이메일을 입력해주세요.' />
        </InputWrapper>

        <InputWrapper label='비밀번호'>
          <Input placeholder='비밀번호를 입력해주세요.' />
        </InputWrapper>

        <InputWrapper label='닉네임'>
          <Input placeholder='닉네임을 입력해주세요.' />
        </InputWrapper>
      </div>

      <Button>회원가입</Button>

      <div className='font-semibold text-sm flex gap-2 mt-4'>
        <p className='text-N30'>이미 Cheese 회원인가요?</p>
        <Link className='text-BLACK' to='/login'>
          로그인
        </Link>
      </div>
    </div>
  )
}

export default RegisterTemplate
