import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const MainPageLayout = ({ children }: Props) => {
  return <div className='flex flex-col gap-14 bg-N10 h-full'>{children}</div>
}

export default MainPageLayout
