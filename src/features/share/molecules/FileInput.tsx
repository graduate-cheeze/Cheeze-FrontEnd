import * as SVG from '@assets/svg'
import { ReactNode } from 'react'
import { usePhotos } from '@features/share/hooks'

interface Props {
  children?: ReactNode
}

const FileInput = ({ children }: Props) => {
  const { onChange } = usePhotos()

  return (
    <div className='p-4 relative bg-N10 border border-N20 max-w-[75.5rem] min-h-[18rem] w-[90%] mx-auto rounded-3xl box-border'>
      <label className='absolute top-1/2 left-1/2 translate-x-center translate-y-center flex flex-col items-center justify-center gap-2 z-10 p-4 bg-[#FFFFFFCC] rounded-2xl backdrop-blur-lg'>
        <input onChange={onChange} hidden type='file' />
        <SVG.Camera />
        <h2 className='text-N40 text-base font-bold'>
          여기를 클릭해서 사진을 추가해주세요!
        </h2>
      </label>
      <div
        onClick={(e) => e.stopPropagation()}
        className='flex items-center justify-start gap-2 overflow-scroll'
      >
        {children}
      </div>
    </div>
  )
}

export default FileInput
