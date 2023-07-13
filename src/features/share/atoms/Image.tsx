import { MouseEvent } from 'react'
import * as SVG from '@assets/svg'

interface Props {
  src: string
  onDelete: () => void
}

const Image = ({ src, onDelete }: Props) => {
  const onClick = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation()

  return (
    <div className='relative'>
      <img
        className='w-72 h-72 aspect-square rounded-lg object-cover'
        src={src}
        alt='image'
      />
      <span
        onClick={onDelete}
        className='absolute top-1 right-1 bg-[#FFFFFFCC] rounded'
      >
        <SVG.XMark />
      </span>
    </div>
  )
}

export default Image
