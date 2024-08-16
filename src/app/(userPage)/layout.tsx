'use client'

import { useEffect, useState } from 'react'
import GlobalHeader from '../_global/GlobalHeader'
import GlobalSidebarNarrow from '../_global/GlobalSidebarNarrow'
import GlobalSidebarWide from '../_global/GlobalSidebarWide'

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

import '@/src/app/global.css'
import '@/src/app/styles.css'
import { LoginedUserReqDataAtom, UserProfileStateAtom } from '@/src/common/recoil/userAtom'
import { LoginUserDataReq_T, UserProfile_T } from '@/src/common/types/user'
import { useRecoilValue } from 'recoil'
import { axiosWithAuth } from '@/src/common/api/instance'

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
  const useLoginData = useRecoilValue<LoginUserDataReq_T>(LoginedUserReqDataAtom)

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
          console.log('new!!!! :', newUserData)
        }
      })

      const data = (async function () {
        return await axiosWithAuth.patch(
          `/${useLoginData.user_data.user_seq}/profile`,
          newUserData
        )
      })()

      console.log('res: ', data)
    }
  }, [useLoginData])

  return (
    <>
      <GlobalHeader onToggleSidebar={toggleSidebar} />
      <main className={`pt-header w-full`}>
        <div className={`${archivo.variable + ' ' + dm_sans.variable}`}>
          {isSidebarCollapsed ? <GlobalSidebarNarrow /> : <GlobalSidebarWide />}
          <section
            className={`flex-grow overflow-auto bg-white ${
              isSidebarCollapsed ? 'pl-24' : 'pl-64'
            }`}
          >
            {children}
          </section>
        </div>
      </main>
    </>
  )
}
