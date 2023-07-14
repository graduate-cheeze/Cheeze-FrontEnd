import { photosService } from '@features/photo'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

interface Props {
  redirectTo?: string
  redirectToIfFound?: string
}

const useLoggedIn = ({ redirectTo, redirectToIfFound }: Props) => {
  const navigate = useNavigate()
  const { data, isLoading, isSuccess } = useQuery('/user', photosService)

  useEffect(() => {
    if ((!redirectTo && isLoading) || (!redirectToIfFound && isLoading)) return

    if (!data && redirectTo) navigate(redirectTo)
    if (isSuccess && data && redirectToIfFound) navigate(redirectToIfFound)
  }, [isSuccess, redirectTo, redirectToIfFound])
}

export default useLoggedIn
