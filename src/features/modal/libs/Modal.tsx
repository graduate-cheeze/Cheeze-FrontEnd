import {
  MouseEvent,
  cloneElement,
  useEffect,
  useState,
  ReactElement,
  useContext,
} from 'react'
import ReactDOM from 'react-dom'
import { ModalContext } from '@features/modal/provider/ModalProvider'

interface Props {
  children: ReactElement
}

const Modal = ({ children }: Props) => {
  const [isCSR, setIsCSR] = useState(false)
  const { close } = useContext(ModalContext)

  useEffect(() => {
    setIsCSR(true)
  }, [])

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      width: 100%;`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ''
      window.scrollTo(0, -parseInt(scrollY))
    }
  }, [])

  if (typeof window === 'undefined') return <></>
  if (!isCSR) return <></>

  const portal = document.getElementById('modal')
  if (!portal) throw new Error('Not found modal')

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return ReactDOM.createPortal(
    <div
      onClick={close}
      className='flex justify-center items-center fixed top-0 left-0 w-screen h-screen backdrop-blur'
    >
      {cloneElement(children, { onClick })}
    </div>,
    portal
  )
}

export default Modal
