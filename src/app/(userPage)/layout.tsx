'use client'

import { useEffect, useState } from 'react'
import GlobalHeader from '../_global/GlobalHeader'
import GlobalSidebarNarrow from '../_global/GlobalSidebarNarrow'
import GlobalSidebarWide from '../_global/GlobalSidebarWide'

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

import '@/src/app/global.css'
import '@/src/app/styles.css'
import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import { LoginUserDataReq_T } from '@/src/common/types/user'
import { useRecoilValue } from 'recoil'
import { axiosWithAuth } from '@/src/common/api/instance'
import { useQueryClient } from '@tanstack/react-query'

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

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState)
  }

  useEffect(() => {
    if (useLoginData.loginState === 300) {
      const newUserData = { ...useLoginData.user_data }

      window.alert(`${useLoginData.needData.toString()}가 필요합니다.`)
      useLoginData.needData.forEach((data_name) => {
        const data: string | null = window.prompt(`${data_name}를 입력해주세요.`)
        console.log(data)
        if (!data) return
        if (data_name === 'user_id') {
          newUserData.user_id = data
        }
      })

      // user_id를 채워넣은 후 다시 로그인 데이터 요청
      ;(async function () {
        const { data, status } = await axiosWithAuth.patch(`/login/id`, {
          user_id: newUserData.user_id,
        })
        // 에러 날라올 수 있음 -> id 중복~~ 임시처리이므로 나중에 페이지 분리하는 것도 좋을 듯
        if (status === 200) {
          queryClient.invalidateQueries({ queryKey: ['login', 'userPage'] })
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
          <section className={`flex-grow overflow-auto bg-white ${isSidebarCollapsed ? 'pl-24' : 'pl-64'}`}>
            {children}
          </section>
        </div>
      </main>
    </>
  )
}
