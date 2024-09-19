'use client'
import '@/src/app/global.css'
import '@/src/app/styles.css'

import { useEffect, useState } from 'react'
import GlobalHeader from '../_global/GlobalHeader'
import GlobalSidebarNarrow from '../_global/GlobalSidebarNarrow'
import GlobalSidebarWide from '../_global/GlobalSidebarWide'

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import { LoginUserDataReq_T } from '@/src/common/types/user'
import { useRecoilValue } from 'recoil'
import { axiosWithAuth } from '@/src/common/api/instance'
import { useQueryClient } from '@tanstack/react-query'
import { onlyEnglishAndNumber } from '@/src/common/utils/valid/onlyEnglishAndNumber'
import { headerSize } from '../_styles/const/const'
import { usePathname } from 'next/navigation'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})
const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})

interface layoutProps {
  children: React.ReactNode
  router: any
}

export default function DefaultLayout({ children }: layoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
  const useLoginData = useRecoilValue<LoginUserDataReq_T>(LogedInUserReqDataAtom)
  const queryClient = useQueryClient()
  const owner_seq = usePathname().slice(1)

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState)
  }

  useEffect(() => {
    if (useLoginData.loginState === 300 && useLoginData.needData) {
      const newUserData = { ...useLoginData.user_data }

      window.alert(`${useLoginData?.needData.toString()}가 필요합니다.`)
      useLoginData?.needData.forEach((data_name) => {
        const data: string | null = window.prompt(`${data_name}를 입력해주세요.`)

        if (!data) return alert('입력값이 없습니다.')
        if (!(2 < data_name.length && data_name.length < 20)) return alert('2자 이상 20자 이하로 입력해주세요.')
        if (!onlyEnglishAndNumber(data)) return alert('영어와 숫자만 입력 가능합니다.')
        if (data_name === 'user_id') newUserData.user_id = data
      })

      // user_id를 채워넣은 후 다시 로그인 데이터 요청
      ;(async function () {
        const { data, status } = await axiosWithAuth.patch(`/login/id`, {
          user_id: newUserData.user_id,
        })

        // 에러 날라올 수 있음 -> id 중복~~ 임시처리이므로 나중에 페이지 분리하는 것도 좋을 듯
        if (status === 200) {
          queryClient.invalidateQueries({ queryKey: ['login', 'userPage'] })
          queryClient.invalidateQueries({ queryKey: ['ownerUserData', owner_seq] })
        }
        return data
      })()
    }
  }, [useLoginData])

  return (
    <>
      <GlobalHeader onToggleSidebar={toggleSidebar} />
      <main className={`w-full pt-header`}>
        <div className={`${archivo.variable + ' ' + dm_sans.variable}`}>
          {isSidebarCollapsed ? <GlobalSidebarNarrow /> : <GlobalSidebarWide />}
          <section
            className={`maxHeightWithoutHeader flex-grow overflow-auto bg-white ${isSidebarCollapsed ? 'pl-24' : 'pl-64'}`}
          >
            {children}
          </section>
        </div>
      </main>
    </>
  )
}
