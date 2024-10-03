'use client'

import { useQuery } from '@tanstack/react-query'
import { getBadgeDetails } from '../_fetch/getBadge'
import NextImg from '@/src/common/utils/NextImg'
import { IoIosArrowBack } from 'react-icons/io'
import { useRouter } from 'next/navigation'

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

  const { name, image, member_count, auth } = data
  const { email, login, file } = auth

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
          <p className="mt-2 text-gray-600">인증회원 수: {member_count}</p>
          <p className="mt-1 text-gray-600">뱃지 설명: 42서울 인증 뱃지</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-medium text-gray-700">인증 내용</h2>
        <div className="space-y-6">
          <DataForm title="이메일" isAuth={!!email} memo="이메일 인증 상태">
            <p className="my-2 text-sm text-gray-700">이메일: {email}</p>
          </DataForm>

          <DataForm
            title="로그인"
            isAuth={login}
            memo="인증 가능한 것: 아이디 소유 + 기본정보, 게시물(사진, 동영상, 글)의 정보 참고 https://developers.facebook.com/docs/instagram-basic-display-api"
          />

          <DataForm
            title="서류"
            isAuth={file}
            memo="발급기관: 큐넷 / 자격종목 / 합격 월일 / 자격번호 등 서류 정보 인증 가능한 것: 자격종목, 합격 월일,
                자격번호 등 https://www.q-net.or.kr/qlf006.do?id=qlf00601&gSite=Q&gId= 에서 검증 가능"
          />
          <DataForm
            title="블록체인"
            isAuth={file}
            memo="발급기관: 큐넷 / 자격종목 / 합격 월일 / 자격번호 등 서류 정보 인증 가능한 것: 자격종목, 합격 월일,
                자격번호 등 https://www.q-net.or.kr/qlf006.do?id=qlf00601&gSite=Q&gId= 에서 검증 가능"
          />
        </div>
      </div>
    </div>
  )
}

type BadgeDetailProps = {
  title: string
  isAuth: boolean
  memo: string
  children?: React.ReactNode
}

function DataForm({ title, isAuth, memo, children }: BadgeDetailProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="flex items-center gap-5">
        <h3 className="text-lg font-semibold text-gray-600">{title} 인증</h3>
        <span className={isAuth ? 'font-bold text-blue-500' : 'text-red-600'}>{isAuth ? '가능' : '불가능'}</span>
      </div>
      {children}
      <div className="mt-2">
        <p className="mt-1 text-sm text-gray-500">메모</p>
        <p className="mt-2 text-gray-700">{memo}</p>
      </div>
    </div>
  )
}
