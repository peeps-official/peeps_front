'use client'
import '@/src/app/global.css'
import '@/src/app/styles.css'

import { useState } from 'react'

import { Archivo, DM_Sans } from 'next/font/google'

import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import { LoginUserData_T } from '@/src/common/types/user'
import NextImg from '@/src/common/utils/NextImg'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import GlobalHeader from '../../(userPage)/[user_seq]/_components/Header/GlobalHeader'
import GlobalSidebarNarrow from '../../(userPage)/[user_seq]/_components/SideBar/GlobalSidebarNarrow'
import GlobalSidebarWide from '../../(userPage)/[user_seq]/_components/SideBar/GlobalSidebarWide'

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
  const useLoginData = useRecoilValue<LoginUserData_T>(LogedInUserReqDataAtom)
  const isUserLogedIn = useLoginData?.user_data?.user_seq === '' ? false : true

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState)
  }

  return (
    <main className={`relative w-full pt-header`}>
      <GlobalHeader onToggleSidebar={toggleSidebar} />

      <Link href="/" className="fixed left-[66px] top-0 z-sideBar mt-[2px] h-[60px] w-[80px] py-[20px]">
        <NextImg alt="PEEPS logo" src="/images/logos/peeps.png" styles="object-cover cursor-pointer" />
      </Link>
      {isUserLogedIn && (
        <div
          className={`fixed left-0 top-0 z-sideBarBack w-24 ${archivo.variable} ${dm_sans.variable} ${!isSidebarCollapsed ? sideBarBackground : ''}`}
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
