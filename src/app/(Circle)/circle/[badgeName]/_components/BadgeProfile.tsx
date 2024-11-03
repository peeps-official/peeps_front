'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import Button from '@/src/common/components/Btn/Button'
import { CircleDataAtom } from '@/src/common/recoil/circleAtom'
import { Circle_T } from '@/src/common/types/circle'
import NextImg from '@/src/common/utils/NextImg'
import { useQueryClient } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'

export default function BadgeProfile() {
  const setClubInfo = useRecoilValue<Circle_T | null>(CircleDataAtom)

  return (
    <div className="box-border flex max-w-full flex-1 flex-col gap-[20px]">
      <div className="relative flex items-center gap-[10px]">
        {setClubInfo && (
          <>
            <ProfileImage src={setClubInfo.badge.image} alt="profile image" />
            <ProfileInfo circleInfo={setClubInfo} />
          </>
        )}
      </div>
    </div>
  )
}

type ProfileImageProps = {
  alt: string
  src: string | null
}

function ProfileImage({ alt, src }: ProfileImageProps) {
  return (
    <>
      <div className={`h-[140px] w-[140px] rounded-full bg-[white] p-[4px]`}>
        <div className="relative h-full w-full">
          <div className="h-full w-full cursor-pointer overflow-hidden rounded-full object-cover">
            <NextImg alt={alt} src={src ?? '/images/profile/profile.svg'} />
          </div>
        </div>
      </div>
    </>
  )
}

type Props = {
  circleInfo: Circle_T
}

function ProfileInfo({ circleInfo }: Props) {
  const { badge, user, board, follow } = circleInfo
  const { bdg_id, name, image, type, member_count, followingCount, description, auth } = badge

  return (
    <div className="flex flex-1 flex-col gap-[11px]">
      <div className="flex justify-between">
        <div>
          <Name name={name} />
          <IdAndFollowers type={type} user={user} follow={follow} board={board} />
        </div>
      </div>
      <ProfileMessage message={description ?? '--'} />
      {/* {badge_list.length > 0 && <BadgeList badges={badge_list} />} */}
      <FollowAndProfileButton />
    </div>
  )
}

/**
 * 유저 이름
 */
function Name({ name }: { name: string }) {
  return (
    <div className="font-inherit relative m-0 inline-block min-w-[103px] pb-[] text-[28px] font-bold leading-[34px] tracking-[-0.01em]">
      {name}
    </div>
  )
}

/**
 * 유저 아이디 & 팔로워
 */

type IdAndFollowersProps = {
  type: string
  user: number
  board: number
  follow: number
}

function IdAndFollowers({ type, user, board, follow }: IdAndFollowersProps) {
  return (
    <div className="robo-bold-14 flex pt-[.5em]">
      <div className="w-fit">@{type}</div>
      <div className="flex w-3 shrink-0 items-center justify-center text-center">‧</div>
      <div className="w-fit">인증 {user}명</div>
      <div className="flex w-3 shrink-0 items-center justify-center text-center">‧</div>
      <div className="w-fit">팔로워 {follow}명</div>
    </div>
  )
}

/**
 * 프로필 메세지
 */

type ProfileMessageProps = {
  message: string
}

function ProfileMessage({ message }: ProfileMessageProps) {
  return (
    <div className="font-roboto text-dimgray-lighter0 relative font-medium leading-[14px] tracking-[-0.01em]">
      {message}
    </div>
  )
}

/**
 * 팔로우 & 프로필 보기 버튼
 */

type isFollow = -1 | 0 | 1 // -1: 로그인 안됨, 0: 팔로우 안함, 1: 팔로우 중

export function FollowAndProfileButton() {
  const queryClient = useQueryClient()
  const setClubInfo = useRecoilValue<Circle_T | null>(CircleDataAtom)

  const handleFollowClick = () => {
    handleEditProfile()
  }

  const isFollow: isFollow = setClubInfo?.isFollow ? 1 : 0

  async function handleEditProfile() {
    // isFollow
    if (isFollow === 0) {
      const { data, status } = await axiosWithAuth.post(`/circle/${setClubInfo?.sep_id}/follow`)
      if (status === 201) {
        queryClient.invalidateQueries({ queryKey: ['clubProfile'] })
      }
    } else if (isFollow === 1) {
      const { data, status } = await axiosWithAuth.delete(`/circle/${setClubInfo?.sep_id}/follow`)
      if (status === 200) {
        queryClient.invalidateQueries({ queryKey: ['clubProfile'] })
      }
    }
  }

  return (
    <div className="mt-[1rem] flex items-center gap-[10px] text-center">
      <Button
        title={isFollow === 1 ? '팔로우 중' : '팔로우'}
        onClickFn={handleFollowClick}
        styles={
          isFollow
            ? 'bg-blue-primary text-white hover:bg-blue-primaryHover'
            : 'bg-blue-secondary text-white hover:bg-blue-secondaryHover'
        }
      />
    </div>
  )
}
