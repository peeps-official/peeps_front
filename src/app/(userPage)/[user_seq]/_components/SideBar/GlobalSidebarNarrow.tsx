'use client'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'

import { LogedInUserReqDataAtom, Login_User_Follow_Atom, LoginUserBadgeListAtom } from '@/src/common/recoil/userAtom'
import { Badge_T } from '@/src/common/types/badge'
import { LoginUserData_T, LoginUserFollow_T } from '@/src/common/types/user'
import NextImg from '@/src/common/utils/NextImg'
import { DivLine, SideBarLink, SideBarPartWrapper } from './SideBarUtils'

export default function GlobalSidebarNarrow() {
  const { user_data: logedInUserData } = useRecoilValue<LoginUserData_T>(LogedInUserReqDataAtom)
  const followList = useRecoilValue<LoginUserFollow_T[]>(Login_User_Follow_Atom)
  const badgeList = useRecoilValue<Badge_T[]>(LoginUserBadgeListAtom)

  const isUserLogedIn = logedInUserData.user_seq === '' ? false : true

  return (
    <div className={'flex h-screen flex-col items-start bg-white pl-2 text-left font-kr text-mini text-dimgray-100'}>
      {isUserLogedIn && (
        <>
          <SideBarPartWrapper className="mt-[-0.75rem]">
            <SideBarLink href="/feed">
              <div className="flex flex-col items-center gap-[4px]">
                <div className="h-7 w-7">
                  <NextImg alt="All" src="/images/sidebar/box.svg" />
                </div>
                <b className="kr-bold-12">피드</b>
              </div>
            </SideBarLink>
          </SideBarPartWrapper>

          <NarrowBarSubPartWrapper className="mt-[-0.25rem]" title="뱃지">
            {badgeList &&
              badgeList.map((badge) => (
                <NarrowBarItem href={`/circle/${badge.name}`} key={badge.bdg_id} image={badge.image} />
              ))}
          </NarrowBarSubPartWrapper>

          <NarrowBarSubPartWrapper title="팔로우">
            {followList &&
              followList.map((follow: LoginUserFollow_T) => (
                <NarrowBarItem href={`/${follow.user_sep}`} key={follow.user_sep} image={follow.image}></NarrowBarItem>
              ))}
          </NarrowBarSubPartWrapper>
        </>
      )}
    </div>
  )
}

function NarrowBarSubPartWrapper({
  title,
  className = '',
  children,
}: {
  title: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <SideBarPartWrapper className={className}>
      <div className="kr-bold-14 relative my-1 text-center before:absolute before:left-0 before:top-[-0.5rem] before:h-[1px] before:w-full before:bg-gray-300 before:content-['']">
        {title}
      </div>
      <div>{children}</div>
    </SideBarPartWrapper>
  )
}

function NarrowBarItem({ href, image }: { href: string; image: string }) {
  return (
    <SideBarLink href={href}>
      <div className="h-7 w-7">
        <NextImg src={image} alt={href} styles="relative overflow-hidden rounded-lg object-cover" />
      </div>
    </SideBarLink>
  )
}
