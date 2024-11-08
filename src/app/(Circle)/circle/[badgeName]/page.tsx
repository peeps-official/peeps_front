'use client'

import { CircleDataAtom } from '@/src/common/recoil/circleAtom'
import { Circle_T } from '@/src/common/types/circle'
import { useRecoilValue } from 'recoil'
import BadgeProfile from './_components/BadgeProfile'
import DataWrapperForClubPage from './_components/DataWrapperForClubPage'
import CircleFeed from './_components/feed/CircleFeed'

type BadgeDetailPageParams = {
  params: {
    badgeName: string
  }
}

export default function BadgeDetailPage({ params }: BadgeDetailPageParams) {
  const circleProfile = useRecoilValue<Circle_T | null>(CircleDataAtom)

  return (
    <DataWrapperForClubPage badgeName={params.badgeName}>
      <div className="flex flex-1 flex-col items-center justify-start pt-3">
        <div className="mx-[auto] flex w-full max-w-[1316px] flex-col gap-[17px] px-[23px] py-[20px]">
          <BadgeProfile />
          {/* <Tabs /> -> 내가 올린 글, 댓글 볼 수 있는 부분*/}
          {circleProfile && circleProfile.isFollow ? (
            <CircleFeed />
          ) : (
            <div className="mt-5">'팔로우한 클럽의 내용만 볼 수 있습니다.'</div>
          )}
        </div>
      </div>
    </DataWrapperForClubPage>
  )
}
