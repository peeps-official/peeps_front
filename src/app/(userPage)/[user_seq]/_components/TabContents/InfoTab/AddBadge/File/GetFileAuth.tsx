'use client'

import AddAuthContainer from '../AddAuthContainer'
import { HiOutlineDownload } from 'react-icons/hi'

export default function GetFileAuth() {
  return (
    <AddAuthContainer
      title="서류 인증"
      subTitle="서류를 통해서, 각종 자격을 인증할 수 있어요."
      icon={<HiOutlineDownload />}
    >
      <div>파일파일</div>
    </AddAuthContainer>
  )
}
