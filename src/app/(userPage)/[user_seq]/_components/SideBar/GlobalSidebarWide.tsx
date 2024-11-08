'use client'
import { useRecoilValue } from 'recoil'

import { LogedInUserReqDataAtom, Login_User_Follow_Atom, LoginUserBadgeListAtom } from '@/src/common/recoil/userAtom'
import { Badge_T } from '@/src/common/types/badge'
import { LoginUserData_T, LoginUserFollow_T } from '@/src/common/types/user'
import NextImg from '@/src/common/utils/NextImg'
import { useEffect } from 'react'
import { DivLine, SideBarLink, SideBarPartWrapper } from './SideBarUtils'

export default function GlobalSidebarWide({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { user_data: logedInUserData } = useRecoilValue<LoginUserData_T>(LogedInUserReqDataAtom)
  const followList = useRecoilValue<LoginUserFollow_T[]>(Login_User_Follow_Atom)
  const badgeList = useRecoilValue<Badge_T[]>(LoginUserBadgeListAtom)

  const isUserLogedIn = logedInUserData.user_seq === '' ? false : true

  useEffect(() => {
    if (!isUserLogedIn) return
    ;(async () => {})()
  }, [isUserLogedIn])

  return (
    <div className="z-sideBar h-screen w-[240px] overflow-y-auto bg-white pl-2 text-mini text-dimgray-100">
      <SideBarPartWrapper>
        <SideBarLink href="/feed">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7">
              <NextImg alt="All" src="/images/sidebar/box.svg" />
            </div>
            <b className="kr-bold-14 relative top-[-1px]">피드</b>
          </div>
        </SideBarLink>
      </SideBarPartWrapper>

      <DivLine />

      <WideBarSubPartWrapper title="팔로잉 뱃지">
        {badgeList &&
          badgeList.map((badge) => (
            <WideBarItem href={`/circle/${badge.name}`} key={badge.bdg_id} image={badge.image} name={badge.name} />
          ))}
      </WideBarSubPartWrapper>

      <DivLine />

      <WideBarSubPartWrapper title="팔로잉한 친구">
        {followList &&
          followList.map((follow: LoginUserFollow_T) => (
            <WideBarItem
              href={`/${follow.user_sep}`}
              key={follow.user_sep}
              image={follow.image ?? '/images/profile/profile.svg'}
              name={follow.nickname}
              content={follow.user_id ?? ''}
            ></WideBarItem>
          ))}
      </WideBarSubPartWrapper>
    </div>
  )
}

function WideBarSubPartWrapper({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <SideBarPartWrapper>
      <div className="kr-bold-14 px-2">{title}</div>
      <div className="py-2">{children}</div>
    </SideBarPartWrapper>
  )
}

function WideBarItem({
  href,
  image,
  name,
  content = '',
}: {
  href: string
  image: string
  name: string
  content?: string
}) {
  return (
    <SideBarLink href={href}>
      <div className="h-7 w-7">
        <NextImg src={image} alt={name} styles="relative overflow-hidden rounded-lg object-cover" />
      </div>
      <div className="relative top-[-1px]">
        <p className="kr-bold-14">{name}</p>
        <p className="kr-medium-12">{content}</p>
      </div>
    </SideBarLink>
  )
}
