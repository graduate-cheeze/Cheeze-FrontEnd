import { useForm } from 'react-hook-form'

interface FormType {
  email: string
  nickname: string
  password: string
}

const useRegister = () => {
  const { register, handleSubmit } = useForm<FormType>()

  const onSubmit = handleSubmit(async () => {})

  return { register, onSubmit }
}

export default useRegister
