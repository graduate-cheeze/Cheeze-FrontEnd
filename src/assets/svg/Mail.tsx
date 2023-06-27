interface Props {
  isActive?: boolean
}

const Mail = ({ isActive }: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18 15.5V6.5C18 5.94772 17.5523 5.5 17 5.5H4C3.44772 5.5 3 5.94772 3 6.5V15.5C3 16.0523 3.44772 16.5 4 16.5H17C17.5523 16.5 18 16.0523 18 15.5Z'
      fill={isActive ? '#F8C429' : 'transparent'}
    />
    <path
      d='M3 8.5V15.5C3 17.1569 4.34315 18.5 6 18.5H18C19.6569 18.5 21 17.1569 21 15.5V8.5C21 6.84315 19.6569 5.5 18 5.5H6C4.34315 5.5 3 6.84315 3 8.5Z'
      stroke='#363636'
      strokeWidth='2'
    />
    <path
      d='M7 9.30005L10.971 11.6827C11.6044 12.0627 12.3956 12.0627 13.029 11.6827L17 9.30005'
      stroke='#363636'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default Mail
