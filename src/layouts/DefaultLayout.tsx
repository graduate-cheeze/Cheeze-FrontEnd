import { ModalContext } from '@features/modal/provider/ModalProvider'
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  const { modal } = useContext(ModalContext)
  return (
    <>
      <Outlet />
      {modal}
    </>
  )
}

export default DefaultLayout
