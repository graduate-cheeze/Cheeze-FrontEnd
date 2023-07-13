import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Services } from '@features/register'

interface FormType {
  email: string
  nickName: string
  password: string
}

const useRegister = () => {
  const { register, handleSubmit } = useForm<FormType>()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (form) => {
    const res = await Services.registerService(form)

    if (res) navigate('/login')
  })

  return { register, onSubmit }
}

export default useRegister
