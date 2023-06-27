import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: ReactNode
  activeIcon?: ReactNode
}

const Input = ({ icon, activeIcon, ...props }: Props) => {
  const [isFocus, setIsFoucs] = useState<boolean>(false)

  return (
    <label
      className={`w-full p-4 flex items-center bg-N10 border rounded-2xl transition ${
        isFocus ? 'border-N50' : 'border-[transparent]'
      }`}
    >
      <div className='flex gap-2 items-center'>
        {isFocus ? activeIcon : icon}
        <input
          className='w-full outline-none text-base font-semibold text-BLACK bg-N10'
          onFocus={() => setIsFoucs(true)}
          onBlur={() => setIsFoucs(false)}
          {...props}
        />
      </div>
    </label>
  )
}

export default Input
