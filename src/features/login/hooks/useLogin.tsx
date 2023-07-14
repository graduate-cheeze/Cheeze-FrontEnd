import { useRef } from 'react'
import { FormEvent } from 'react'
import { Services } from '@features/login'
import TokenManager from '@api/lib/TokenManager'

const useLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const pwRef = useRef<HTMLInputElement>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = await Services.loginService({
      email: emailRef.current?.value || '',
      password: pwRef.current?.value || '',
    })
    if (!data) return

    TokenManager.setToken(data)
    location.href = '/'
  }

  return { emailRef, pwRef, onSubmit }
}

export default useLogin
