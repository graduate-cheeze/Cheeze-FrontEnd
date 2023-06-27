import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${props.className} relative bg-P2 text-BLACK w-full rounded-[1.25rem] p-[1.16rem] text-base font-bold active:bg-P3 disabled:bg-P1 transition`}
    />
  )
}

export default Button
