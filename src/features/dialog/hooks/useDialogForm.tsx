import { useContext } from 'react'
import { emitter } from '@features/dialog/libs'
import { ModalContext } from '@features/modal/provider/ModalProvider'
import { useForm } from 'react-hook-form'

interface FormType {
  title: string
}

const useDialogForm = () => {
  const { register, handleSubmit } = useForm<FormType>()
  const { close } = useContext(ModalContext)

  const onSubmit = handleSubmit((form) => {
    emitter.emit('dialog', form.title)
    close()
  })

  const onCancel = () => {
    emitter.emit('dialog', false)
    close()
  }

  return { register, onSubmit, onCancel }
}

export default useDialogForm
