import { useLocation } from 'react-router-dom'

const useSamePathCheck = () => {
  const location = useLocation()

  const isSamePathname = (pathname: string) => location.pathname === pathname

  return {
    isSamePathname,
  }
}

export default useSamePathCheck
