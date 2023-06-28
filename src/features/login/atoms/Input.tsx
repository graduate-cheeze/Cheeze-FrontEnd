import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
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

const Input = forwardRef<HTMLInputElement, Props>(
  ({ icon, activeIcon, ...props }, ref) => {
    const [isFocus, setIsFoucs] = useState<boolean>(false)

    return (
      <label
        className={`w-full p-4 flex items-center bg-N10 border rounded-2xl transition cursor-text ${
          isFocus ? 'border-N50' : 'border-[transparent]'
        }`}
      >
        <div className='flex gap-2 items-center'>
          {isFocus ? activeIcon : icon}
          <input
            {...props}
            className='w-full outline-none text-base font-semibold text-BLACK bg-N10'
            onFocus={() => setIsFoucs(true)}
            onBlur={() => {
              setIsFoucs(false)
            }}
            ref={ref}
          />
        </div>
      </label>
    )
  }
)

Input.displayName = 'Input'

export default Input
