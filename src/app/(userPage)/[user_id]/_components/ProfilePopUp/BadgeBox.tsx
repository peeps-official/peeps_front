import ProfileCircleBadge from '@/src/common/components/Badge/ProfileCircleBadge'
import { Badge_T, BadgeAuthData } from '@/src/common/types/badge'
import { formatDate } from '@/src/common/utils/Date/formatDate'
import NextImg from '@/src/common/utils/NextImg'
import Link from 'next/link'
import { createContext, useContext, useState } from 'react'

type BadgeBoxProps = {
  badges: Badge_T[]
}

export default function BadgeBox({ badges }: BadgeBoxProps) {
  const [selectedBadge, setSelectedBadge] = useState<Badge_T>(badges[0])

  return (
    <div className="flex flex-col gap-[10px] w-full rounded-[8px] shadow-popupBox py-[16px] px-[14px]">
      <CanSelectBadgeList
        badges={badges}
        selectedBadgeId={selectedBadge.id}
        setSelectedBadge={setSelectedBadge}
      />

      <div className="flex flex-col gap-[30px] mt-[9px]">
        <GlobalBadgeInfo selectedBadge={selectedBadge} />
        <BadgeDetailBox selectedBadge={{ date: new Date(), method: 'email', addDatas: [] }} />
      </div>
    </div>
  )
}

/**
 * @description 뱃지 선택 가능한 리스트
 */

type BadgeListProps = {
  badges: Badge_T[]
  selectedBadgeId?: string
  setSelectedBadge: React.Dispatch<React.SetStateAction<Badge_T>>
}

export function CanSelectBadgeList({
  badges,
  selectedBadgeId = '-1',
  setSelectedBadge,
}: BadgeListProps) {
  return (
    <>
      <div className="text-left kr-bold-14">뱃지</div>
      <div className="w-full flex overflow-x-auto border-b-[1px] border-solid border-underline pb-[0.4em] pt-[0.2rem] px-0.5 gap-[10px] ">
        {badges.map((badge) => (
          <button onClick={() => setSelectedBadge(badge)}>
            <ProfileCircleBadge
              key={badge.id}
              badge={badge}
              selectedBadgeId={selectedBadgeId}
            />
          </button>
        ))}
      </div>
    </>
  )
}

/**
 * @description 선택된 뱃지의 전체 정보
 */

function GlobalBadgeInfo({ selectedBadge }: { selectedBadge: Badge_T }) {
  return (
    <div className="flex justify-between gap-[20px]">
      <div className="flex gap-[10px]">
        <div className="h-[60px] w-[60px] relative">
          <NextImg alt="badge of Korea.Univ" src={selectedBadge.image} />
        </div>
        <div className="flex flex-col justify-center gap-[10px]">
          <h1 className="w-[6em] truncate h-[30px] text-left tracking-[-0.01em] leading-[1em] text-huge font-bold">
            {selectedBadge.name}
          </h1>
          <div className="flex items-center text-small font-roboto text-detail">
            <span className="tracking-[-0.01em] leading-[14px] font-medium">
              인증 {selectedBadge.verifiedUserCount}명
            </span>
            <span className="flex items-center justify-center text-center px-[0.3em]">‧</span>
            <span className="tracking-[-0.01em] leading-[14px] font-medium">
              팔로잉 {selectedBadge.followingCount}명
            </span>
          </div>
        </div>
      </div>
      <Link
        href={'/badge/' + selectedBadge.id}
        className="h-fit text-detail bg-gray-dark rounded-8xs py-[0.8em] px-[1.6em] hover:bg-gray-afterDark "
      >
        구경가기
      </Link>
    </div>
  )
}

/**
 * @description 뱃지 디테일 정보
 */

type BadgeDetailBoxProps = {
  selectedBadge: BadgeAuthData
}

function BadgeDetailBox({ selectedBadge }: BadgeDetailBoxProps) {
  return (
    <div className="flex flex-col gap-[12px]  text-dimgray-lighter0">
      <b className="w-32 relative tracking-[-0.01em] leading-[100%] flex items-center font-bold">
        상세정보
      </b>
      <BadgeDetail title="인증 날짜" content={formatDate(selectedBadge.date)} />
      <BadgeDetail title="인증 방식" content={selectedBadge.method} />
      {selectedBadge.addDatas.map((addData) => (
        <BadgeDetail title={addData.title} content={addData.content} />
      ))}
    </div>
  )
}

type BadgeDetailProps = {
  title: string
  content: string
}

function BadgeDetail({ title, content }: BadgeDetailProps) {
  return (
    <div className="flex justify-between gap-[20px] text-micro ">
      <span className="truncate text-left tracking-[-0.01em] leading-[100%] min-w-[47px]">
        {title}
      </span>
      <b className="truncate text-right tracking-[-0.01em] leading-[100%] text-black font-bold min-w-[58px]">
        {content}
      </b>
    </div>
  )
}
