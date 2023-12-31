interface Props {
  isActive?: boolean
}

const Pw = ({ isActive }: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.5 6.75V10.8955C7.5 10.9532 7.45322 11 7.39552 11H5.7C4.20883 11 3 12.2088 3 13.7V15.5C3 17.1569 4.34315 18.5 6 18.5H16C16.5523 18.5 17 18.0523 17 17.5V13.4C17 12.0745 15.9255 11 14.6 11H13.1045C13.0468 11 13 10.9532 13 10.8955V6.75C13 5.23122 11.7688 4 10.25 4C8.73122 4 7.5 5.23122 7.5 6.75Z'
      fill={isActive ? '#F8C429' : 'transparent'}
    />
    <rect
      x='4'
      y='10.502'
      width='16'
      height='10'
      rx='3'
      stroke='#363636'
      strokeWidth='2'
    />
    <path
      d='M12 15.0059V16.5059'
      stroke='#363636'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M8 10.498V7.49805C8 5.28891 9.79086 3.49805 12 3.49805V3.49805C14.2091 3.49805 16 5.28891 16 7.49805V10.498'
      stroke='#363636'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export default Pw
