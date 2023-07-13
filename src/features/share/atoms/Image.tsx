import * as SVG from '@assets/svg'

interface Props {
  src: string
}

const Image = ({ src }: Props) => {
  return (
    <div className='relative'>
      <img
        className='w-72 aspect-square rounded-lg object-cover'
        src={src}
        alt='image'
      />
      <span className='absolute top-1 right-1 bg-[#FFFFFFCC] rounded'>
        <SVG.XMark />
      </span>
    </div>
  )
}

export default Image
