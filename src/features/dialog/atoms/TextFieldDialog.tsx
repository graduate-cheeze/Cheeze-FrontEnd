import { Button } from '@features/global'
import { Input } from '@features/login/atoms'
import { Modal } from '@features/modal/libs'
import { useDialogForm } from '@features/dialog/hooks'

const TextFieldDialog = () => {
  const { onSubmit, onCancel, register } = useDialogForm()

  return (
    <Modal blurOnly>
      <form
        onSubmit={onSubmit}
        className='bg-WHITE p-5 rounded-3xl max-w-[22.25rem] w-full'
      >
        <h3 className='text-xl font-bold mb-2'>사진 제목</h3>
        <Input
          {...register('title', { required: true })}
          placeholder='사진의 제목을 지어주세요!'
        />
        <div className='flex gap-2 mt-4'>
          <Button onClick={onCancel} color='N10' type='button'>
            취소
          </Button>
          <Button color='P2'>확인</Button>
        </div>
      </form>
    </Modal>
  )
}

export default TextFieldDialog
