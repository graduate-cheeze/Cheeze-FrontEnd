import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: 'N10' | 'P2'
}

const Button = ({ color = 'P2', ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${props.className} relative bg-${color} text-BLACK w-full rounded-[1.25rem] p-[1.16rem] text-base font-bold active:bg-P3 disabled:bg-P1 transition`}
    />
  )
}

export default Button
