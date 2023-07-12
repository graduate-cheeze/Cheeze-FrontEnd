interface Props {
  src: string
}

const Image = ({ src }: Props) => {
  return (
    <img
      className='w-72 aspect-square rounded-lg object-cover'
      src={src}
      alt='image'
    />
  )
}

export default Image
