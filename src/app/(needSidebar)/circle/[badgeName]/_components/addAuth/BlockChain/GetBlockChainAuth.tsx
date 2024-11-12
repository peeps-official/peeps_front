'use client'

import AddAuthContainer from '../AddAuthContainer'
import { HiOutlineLink } from 'react-icons/hi'

export default function GetBlockChainAuth() {
  return (
    <AddAuthContainer
      title="블록체인 인증"
      subTitle="지갑 내부의 정보를 통해서 인증받을 수 있어요."
      icon={<HiOutlineLink />}
    >
      <div>블록블록</div>
    </AddAuthContainer>
  )
}
