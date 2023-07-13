import * as SVG from '@assets/svg'

const Loading = () => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <SVG.Spinner />
    </div>
  )
}

export default Loading
