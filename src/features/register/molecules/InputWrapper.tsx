import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  label: string
}

const InputWrapper = ({ label, children }: Props) => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <p className='text-N30 font-medium text-xs'>{label}</p>
      {children}
    </div>
  )
}

export default InputWrapper
