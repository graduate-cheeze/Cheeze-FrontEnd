import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <main className='h-screen flex items-center justify-center bg-N10'>
      {children}
    </main>
  )
}

export default AuthLayout
