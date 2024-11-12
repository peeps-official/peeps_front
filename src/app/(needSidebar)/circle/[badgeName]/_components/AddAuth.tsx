'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import BasicCenterModal from '@/src/common/components/Modal/BasicCenterModal'
import { CircleDataAtom } from '@/src/common/recoil/circleAtom'
import { CircleProfile_T } from '@/src/common/types/circle'
import { CommonBadge_T } from '@/src/common/types/commonBadge'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import GetLoginAuth from './addAuth/Login/GetLoginAuth'
import GetEmailAuth from './addAuth/Email/GetEmailAuth'
import GetFileAuth from './addAuth/File/GetFileAuth'
import { IsUserLogedInAtom } from '@/src/common/recoil/userAtom'

export default function AddAuth({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  const [commonBadge, setCommonBadge] = useState<CommonBadge_T | null>(null)
  const clubInfo = useRecoilValue<CircleProfile_T | null>(CircleDataAtom)

  useEffect(() => {
    if (!clubInfo) {
      setIsOpen(false)
      return alert('클럽 정보를 불러오는데 실패했습니다.')
    }
    ;(async () => {
      try {
        const { data } = await axiosWithAuth.get(`/badge?name=${clubInfo.sep_id}`)
        setCommonBadge(data[0])
      } catch (error) {
        console.error(error)
        setIsOpen(false)
        return alert('클럽 정보를 불러오는데 실패했습니다.')
      }
    })()
  }, [])

  if (!commonBadge) return null

  return (
    <BasicCenterModal setIsOpen={setIsOpen}>
      <div className="max-h-[80vh] overflow-auto rounded-md bg-white p-10">
        <div className="kr-bold-20 mb-[1rem]">{clubInfo?.sep_id} 인증하기</div>
        <div className="flex flex-col gap-[1rem]">
          {commonBadge?.auth.login.isEnabled && <GetLoginAuth name={commonBadge.name} />}
          {commonBadge?.auth.email.isEnabled && <GetEmailAuth setIsOpen={setIsOpen} />}
          {commonBadge?.auth.file.isEnabled && <GetFileAuth />}
          {/* <GetBlockChainAuth /> */}
        </div>
      </div>
    </BasicCenterModal>
  )
}
