'use client'

import { useQuery } from '@tanstack/react-query'
import { getBadgeDetails } from '../_fetch/getBadge'
import NextImg from '@/src/common/utils/NextImg'
import { IoIosArrowBack } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { AuthData_T } from '@/src/common/types/commonBadge'

type Props = {
  badgeId: string
}
/**
 * 뱃지 자세한 내용
 * 뱃지 이름, 설명, 인증 내용, 인증 내용에 따른 인증 대상, 인증 가능한 것 등등
 */

export default function BadgeDetail({ badgeId }: Props) {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['badgeDetail', badgeId],
    queryFn: () => getBadgeDetails(badgeId),
  })

  const router = useRouter()

  if (!isSuccess) return <div>로딩중...</div>

  if (isError || !data) {
    return <div>오류가 발생했습니다.</div>
  }

  const { bdg_id, name, image, type, member_count, followingCount, memo, auth } = data
  const { email, login, file, blockchain } = auth

  return (
    <div className="mx-auto mt-10 max-w-4xl rounded-lg bg-white p-6 shadow-md">
      <div
        onClick={() => router.back()}
        className="hover:bg-black/8 my-5 flex h-6 w-6 cursor-pointer items-center justify-center rounded-[0.3em] transition-colors duration-200"
      >
        <IoIosArrowBack style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-solid border-black p-3">
          <NextImg src={image} alt="뱃지 이미지" />
        </div>
        <div className="mt-4 flex-1 md:ml-6 md:mt-0">
          <h1 className="text-7xl font-semibold text-gray-800">{name}</h1>
          <p className="mt-2 text-gray-600">타입: {type}</p>
          <p className="mt-2 text-gray-600">인증회원 수: {member_count}</p>
          <p className="mt-2 text-gray-600">팔로잉 회원 수: {followingCount}</p>
          <p className="mt-1 text-gray-600">뱃지 설명: {memo}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-medium text-gray-700">인증 내용</h2>
        <div className="space-y-6">
          <DataForm title="이메일" authData={email}>
            {email && <p className="my-2 text-sm text-gray-700">이메일: {email.method ?? ''}</p>}
          </DataForm>
          <DataForm title="로그인" authData={login} />
          <DataForm title="서류" authData={file} />
          <DataForm title="블록체인" authData={blockchain} />
        </div>
      </div>
    </div>
  )
}

type BadgeDetailProps = {
  title: string
  authData: AuthData_T | null
  children?: React.ReactNode
}

function DataForm({ title, authData, children }: BadgeDetailProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="flex items-center gap-5">
        <h3 className="text-lg font-semibold text-gray-600">{title} 인증</h3>
        {authData && <h4>{authData.method}</h4>}
        {authData ? (
          <span className={authData.isEnabled ? 'font-bold text-blue-500' : 'text-red-600'}>
            {authData.isEnabled ? '가능' : '불가능'}
          </span>
        ) : (
          <span className={'text-red-600'}>{'불가능'}</span>
        )}
      </div>
      {children}
      <div className="mt-2">
        <p className="mt-1 text-sm text-gray-500">메모</p>
        {authData && <p className="mt-2 text-gray-700">{authData?.memo}</p>}
      </div>
    </div>
  )
}
