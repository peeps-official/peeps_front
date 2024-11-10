'use client'

import { IsOwnerAtom } from '@/src/common/recoil/userHome'
import { UserHomeTab_T } from '@/src/common/types/home'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import Badge from './Badge/Badge'
import Feed from './Feed/Feed'
import ImageTab from './Image/ImageTab'
import Info from './Info/Info'
import InfoEdit from './InfoEdit/InfoEdit'

export default function Tabs() {
  const searchParams = useSearchParams()

  const activeTab = searchParams.get('tab') ?? 'feed'
  const isOwner = useRecoilValue<boolean>(IsOwnerAtom)

  const isActive = (tab: UserHomeTab_T) => activeTab === tab

  return (
    <>
      <div className="flex border-solid border-gray-medium text-center font-bold">
        <TapItem title="피드" tab="feed" isClicked={isActive('feed')} />
        <TapItem title="정보" tab="info" isClicked={isActive('info')} />
        <TapItem title="이미지" tab="image" isClicked={isActive('image')} />
        <TapItem title="뱃지" tab="badge" isClicked={isActive('badge')} />
        {isOwner && <TapItem title="정보 수정" tab="infoEdit" isClicked={isActive('infoEdit')} />}
      </div>
      <div className="mb-[10rem] mt-[0.5rem]">
        {activeTab === 'feed' && <Feed />}
        {activeTab === 'info' && <Info />}
        {activeTab === 'image' && <ImageTab />}
        {activeTab === 'badge' && <Badge />}
        {isOwner && activeTab === 'infoEdit' && <InfoEdit />}
      </div>
    </>
  )
}

type TapItemProps = {
  title: string
  tab: string
  isClicked: boolean
}

function TapItem({ title, tab, isClicked }: TapItemProps) {
  return (
    <Link
      href={{
        query: { tab: tab },
      }}
      className="flex items-center justify-center rounded-[5px] text-center hover:bg-slate-300"
    >
      <div className={`kr-bold-16 relative px-[1em] py-[14px]`}>
        <b className={`flex items-center justify-center ${!isClicked && 'text-[#6f6f6f]'}`}>{title}</b>
        {isClicked && (
          <div className="absolute bottom-[1px] left-[0.5em] right-[0.5em] h-[3px] rounded-[2px] bg-black" />
        )}
      </div>
    </Link>
  )
}
