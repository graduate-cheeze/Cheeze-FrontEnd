import { emitter } from '@features/dialog/libs'
import { ModalContext } from '@features/modal/provider/ModalProvider'
import { ReactNode, useContext } from 'react'

const useDialog = () => {
  const eventName = 'dialog'
  const { open } = useContext(ModalContext)

  const dialog = (dialogElement: ReactNode) =>
    new Promise<string | false>((resolve) => {
      emitter.on(eventName, (result) => resolve(result))
      open(dialogElement)
    })

  return { dialog }
}

export default useDialog
