'use client'
import '@/src/app/global.css'
import '@/src/app/styles.css'

import { useEffect, useState } from 'react'

import { Archivo, DM_Sans } from 'next/font/google'

import { axiosWithAuth } from '@/src/common/api/instance'
import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import { LoginUserDataReq_T } from '@/src/common/types/user'
import NextImg from '@/src/common/utils/NextImg'
import { onlyEnglishAndNumber } from '@/src/common/utils/valid/onlyEnglishAndNumber'
import { useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import GlobalHeader from './[user_seq]/_components/Header/GlobalHeader'
import GlobalSidebarNarrow from './[user_seq]/_components/SideBar/GlobalSidebarNarrow'
import GlobalSidebarWide from './[user_seq]/_components/SideBar/GlobalSidebarWide'

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

const sideBarBackground = `!w-[240px] before:bg-black before:bg-opacity-80 before:fixed before:inset-0 before:z-sideBarBack before:content-['']`

export default function DefaultLayout({ children }: layoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
  const useLoginData = useRecoilValue<LoginUserDataReq_T>(LogedInUserReqDataAtom)
  const queryClient = useQueryClient()
  const owner_seq = usePathname().slice(1)

  const isUserLogedIn = useLoginData?.user_data?.user_seq === '' ? false : true

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

    return () => {}
  }, [useLoginData])

  return (
    <main className={`relative w-full pt-header`}>
      <GlobalHeader onToggleSidebar={toggleSidebar} />

      <Link href="/" className="fixed left-[66px] top-0 z-sideBar mt-[2px] h-[60px] w-[80px] py-[20px]">
        <NextImg alt="PEEPS logo" src="/images/logos/peeps.png" styles="object-cover cursor-pointer" />
      </Link>
      {isUserLogedIn && (
        <div
          className={`fixed left-0 top-0 z-sideBarBack w-[78px] ${archivo.variable} ${dm_sans.variable} ${!isSidebarCollapsed ? sideBarBackground : ''}`}
        >
          <div className={'relative z-sideBar flex h-screen w-full flex-col overflow-y-hidden bg-white'}>
            <div className="z-sideBar w-full">
              <div
                className="h-[64px] w-[64px] py-[10px] pl-[19px] pr-[4px] [&_img]:rounded-[5px] [&_img]:hover:bg-[rgba(0,0,0,.05)]"
                onClick={toggleSidebar}
              >
                <NextImg
                  alt="collapsed menu icon"
                  src="/images/header/menu.svg"
                  styles="object-cover h-full cursor-pointer"
                />
              </div>
            </div>
            {isSidebarCollapsed ? <GlobalSidebarNarrow /> : <GlobalSidebarWide onToggleSidebar={toggleSidebar} />}
          </div>
        </div>
      )}
      <section className={`maxHeightWithoutHeader flex-grow overflow-auto bg-white pl-24`}>{children}</section>
    </main>
  )
}
