import * as SVG from '@assets/svg'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const FileInput = ({ children }: Props) => {
  return (
    <div className='p-4 relative bg-N10 border border-N20 max-w-[75.5rem] min-h-[20rem] w-[90%] mx-auto rounded-3xl'>
      <div className='absolute top-1/2 left-1/2 translate-x-center translate-y-center flex flex-col items-center justify-center gap-2 z-10 p-4 bg-[#FFFFFFCC] rounded-2xl backdrop-blur-lg'>
        <SVG.Camera />
        <h2 className='text-N40 text-base font-bold'>사진을 추가해주세요!</h2>
      </div>
      <div className='flex items-center justify-start gap-2 overflow-scroll'>
        {children}
      </div>
    </div>
  )
}

export default FileInput
