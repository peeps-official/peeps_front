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
    <div className="flex w-full flex-col gap-[10px] rounded-[8px] px-[14px] py-[16px] shadow-popupBox">
      <CanSelectBadgeList badges={badges} selectedBadgeId={selectedBadge.id} setSelectedBadge={setSelectedBadge} />

      <div className="mt-[9px] flex flex-col gap-[30px]">
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
  selectedBadgeId?: number
  setSelectedBadge: React.Dispatch<React.SetStateAction<Badge_T>>
}

export function CanSelectBadgeList({ badges, selectedBadgeId = -1, setSelectedBadge }: BadgeListProps) {
  return (
    <>
      <div className="kr-bold-14 text-left">뱃지</div>
      <div className="flex w-full gap-[10px] overflow-x-auto border-b-[1px] border-solid border-underline px-0.5 pb-[0.4em] pt-[0.2rem]">
        {badges.map((badge) => (
          <button key={badge.id} onClick={() => setSelectedBadge(badge)}>
            <ProfileCircleBadge badge={badge} selectedBadgeId={selectedBadgeId} />
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
        <div className="relative h-[60px] w-[60px]">
          <NextImg alt="badge of Korea.Univ" src={selectedBadge.image} />
        </div>
        <div className="flex flex-col justify-center gap-[10px]">
          <h1 className="h-[30px] w-[6em] truncate text-left text-huge font-bold leading-[1em] tracking-[-0.01em]">
            {selectedBadge.name}
          </h1>
          <div className="font-roboto flex items-center text-detail">
            <span className="font-medium leading-[14px] tracking-[-0.01em]">인증 {selectedBadge.member_count}명</span>
            <span className="flex items-center justify-center px-[0.3em] text-center">‧</span>
            <span className="font-medium leading-[14px] tracking-[-0.01em]">
              팔로잉 {selectedBadge.followingCount}명
            </span>
          </div>
        </div>
      </div>
      <Link
        href={'/badge/' + selectedBadge.bdg_id}
        className="h-fit rounded-8xs bg-gray-dark px-[1.6em] py-[0.8em] text-detail hover:bg-gray-afterDark"
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
    <div className="text-dimgray-lighter0 flex flex-col gap-[12px]">
      <b className="relative flex w-32 items-center font-bold leading-[100%] tracking-[-0.01em]">상세정보</b>
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
    <div className="flex justify-between gap-[20px] text-micro">
      <span className="min-w-[47px] truncate text-left leading-[100%] tracking-[-0.01em]">{title}</span>
      <b className="min-w-[58px] truncate text-right font-bold leading-[100%] tracking-[-0.01em] text-black">
        {content}
      </b>
    </div>
  )
}
