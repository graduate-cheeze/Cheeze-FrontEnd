import { useRef } from 'react'
import { FormEvent } from 'react'

const useLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const pwRef = useRef<HTMLInputElement>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return { emailRef, pwRef, onSubmit }
}

export default useLogin
