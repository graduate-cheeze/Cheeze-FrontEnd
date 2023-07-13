import { Button } from '@features/global'
import { Molecules } from '@features/share'
import { Atoms } from '@features/share'

const ShareTemplate = () => {
  return (
    <div className='mt-40 flex flex-col gap-14 items-center'>
      <Molecules.FileInput>
        <Atoms.Image src='https://s3.ap-northeast-2.amazonaws.com/msg-bucket-official/PROJECT/b406bd12-b0e1-4b84-b979-5c747243156eIMG_0393.jpg' />
        <Atoms.Image src='https://s3.ap-northeast-2.amazonaws.com/msg-bucket-official/PROJECT/b406bd12-b0e1-4b84-b979-5c747243156eIMG_0393.jpg' />
        <Atoms.Image src='https://s3.ap-northeast-2.amazonaws.com/msg-bucket-official/PROJECT/b406bd12-b0e1-4b84-b979-5c747243156eIMG_0393.jpg' />
        <Atoms.Image src='https://s3.ap-northeast-2.amazonaws.com/msg-bucket-official/PROJECT/b406bd12-b0e1-4b84-b979-5c747243156eIMG_0393.jpg' />
      </Molecules.FileInput>
      <Button className='max-w-[10rem]'>다음</Button>
    </div>
  )
}
export default ShareTemplate
