import { createContext, ReactNode, useState } from 'react'

interface InitialState {
  modal: ReactNode | null
  open(component: ReactNode): void
  close(): void
}

const initialState: InitialState = {
  modal: null,
  open: () => {},
  close: () => {},
}

export const ModalContext = createContext(initialState)

interface Props {
  children: ReactNode
}

const ModalProvider = ({ children }: Props) => {
  const [modal, setModal] = useState<ReactNode>(null)

  const open = (component: ReactNode) => {
    setModal(component)
  }

  const close = () => {
    setModal(null)
  }

  return (
    <ModalContext.Provider value={{ modal, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
