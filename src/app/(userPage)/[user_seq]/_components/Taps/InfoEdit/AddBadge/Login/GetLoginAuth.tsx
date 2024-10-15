'use client'
import { GoLock } from 'react-icons/go'

import AddAuthContainer from '../AddAuthContainer'

export default function GetLoginAuth() {
  return (
    <AddAuthContainer title="로그인 인증" subTitle="로그인하여 인증을 받을 수 있어요" icon={<GoLock />}>
      <div>로그인</div>
    </AddAuthContainer>
  )
}
