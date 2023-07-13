import { HeaderLogo } from '@assets/svg'
import { Link } from 'react-router-dom'
import useSamePathCheck from './useSamePathCheck'

interface Props {
  nickname?: string
}

const Header = ({ nickname }: Props) => {
  const { isSamePathname } = useSamePathCheck()

  return (
    <header className='w-full h-14 pr-28 pl-28 bg-WHITE flex justify-between sticky top-0 left-0 z-10'>
      <div className='flex items-center'>
        <HeaderLogo />
        <div className='ml-6 flex gap-4'>
          <Link
            className={`w-14 h-14 flex items-center justify-center font-bold ${
              isSamePathname('/') ? 'border-b-P2 border-b' : ''
            }`}
            to='/'
          >
            홈
          </Link>
          <Link
            className={`w-14 h-14 flex items-center justify-center font-bold ${
              isSamePathname('/share') ? 'border-b-P2 border-b' : ''
            }`}
            to='/share'
          >
            공유
          </Link>
        </div>
      </div>

      <div className='font-bold flex items-center'>
        {nickname || ''} 님, 안녕하세요. 👋
      </div>
    </header>
  )
}

export default Header
