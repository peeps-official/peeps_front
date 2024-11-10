'use client'

import { Archivo, DM_Sans } from 'next/font/google'

import { IsUserLogedInAtom, LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import { LoginUserData_T } from '@/src/common/types/user'
import NextImg from '@/src/common/utils/NextImg'
import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import Link from 'next/link'
import GlobalHeader from './Header/GlobalHeader'
import GlobalSidebarNarrow from './SideBar/GlobalSidebarNarrow'
import GlobalSidebarWide from './SideBar/GlobalSidebarWide'
import { useQuery } from '@tanstack/react-query'
import { getLoginUserData } from '@/src/common/api/user'
import { redirect } from 'next/navigation'

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
}

export default function WrapperForSideBarLayout({ children }: layoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
  const isUserLogedIn = useRecoilValue<boolean>(IsUserLogedInAtom)

  const setUserLoginedData = useSetRecoilState<LoginUserData_T>(LogedInUserReqDataAtom)

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState)
  }

  const {
    data: loginUserData,
    isSuccess: loginReqSuccess,
    isLoading: loginReqLoading,
  } = useQuery({
    queryKey: ['userData', { type: 'login' }],
    queryFn: getLoginUserData,
  })

  useEffect(() => {
    if (loginReqLoading || !loginReqSuccess || !loginUserData) return

    if (loginUserData?.loginState === 300 && loginUserData.needData) redirect('/needInfo')
    else setUserLoginedData(loginUserData)
  }, [loginUserData])

  return (
    <main className={`relative w-full pt-header`}>
      <GlobalHeader />

      <Link
        href="/"
        className={`fixed ${isUserLogedIn ? 'left-[66px]' : 'left-[24px]'} top-0 z-sideBar mt-[2px] h-[60px] w-[80px] py-[20px]`}
      >
        <NextImg alt="PEEPS logo" src="/images/logos/peeps.png" styles="object-cover cursor-pointer" />
      </Link>
      {isUserLogedIn && (
        <div
          className={`fixed left-0 top-0 z-sideBarBack w-24 ${archivo.variable} ${dm_sans.variable} ${!isSidebarCollapsed ? sideBarBackground : ''}`}
        >
          <div className={'relative z-sideBar flex h-screen w-fit flex-col overflow-y-hidden bg-white'}>
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
            {isSidebarCollapsed ? <GlobalSidebarNarrow /> : <GlobalSidebarWide />}
          </div>
        </div>
      )}
      <section className={`maxHeightWithoutHeader flex-grow overflow-auto bg-white ${isUserLogedIn && 'pl-24'}`}>
        {children}
      </section>
    </main>
  )
}

const sideBarBackground = `!w-[240px] before:bg-black before:bg-opacity-80 before:fixed before:inset-0 before:z-sideBarBack before:content-['']`
