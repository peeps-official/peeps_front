'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { getLoginUserData } from '@/src/common/api/user'
import { kakaoUrl, naverUrl } from '@/src/common/const/login'
import NextImg from '@/src/common/utils/NextImg'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const {
    data: loginUserData,
    isSuccess: loginReqSuccess,
    isLoading: loginReqLoading,
  } = useQuery({
    queryKey: ['userData', { type: 'login' }],
    queryFn: getLoginUserData,
  })

  const router = useRouter()

  const handleLogout = () => {
    axiosWithAuth
      .post(`/logout`)
      .then(() => {
        router.refresh()
      })
      .catch((err) => {
        alert('로그아웃 중 오류가 발생했습니다.')
        router.replace('/')
      })
  }

  if (loginReqLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-blue-50 font-semibold text-blue-600">로딩중...</div>
    )

  if (loginUserData && loginUserData.loginState !== -1) {
    return (
      <div className="flex h-screen items-center justify-center gap-20 text-blue-600">
        <p className="kr-bold-24 mb-4">이미 로그인이 되어있습니다.</p>
        <div>
          <button
            onClick={handleLogout}
            className="block rounded-md bg-blue-600 px-4 py-3 text-white shadow-sm transition-colors duration-300 hover:bg-blue-700"
          >
            로그아웃하고 로그인하기
          </button>
          <Link
            href={`/`}
            className="border-1 mt-4 block w-full rounded-md border border-solid border-gray-200 bg-[#eee] px-4 py-3 text-center hover:bg-[#ddd]"
          >
            메인 페이지로 이동
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center text-center font-kr text-white">
      <div className="flex w-[440px] max-w-md flex-col gap-[34px] rounded-3xs bg-white pb-[34px] shadow-loginBox">
        <div className="flex flex-col items-center gap-[10px] self-stretch rounded-b-none rounded-t-3xs bg-blue-primary px-5 py-10">
          <div className="flex px-7 py-0">
            <h1 className="font-inherit relative inline-block text-inherit text-large font-bold leading-9 tracking-[-0.01em]">
              PEEPS
            </h1>
          </div>
          <div className="relative text-micro font-normal">우리들만의 커뮤니티, 핍스</div>
        </div>
        {/* 로그인 버튼 섹션 */}
        <div className="flex w-full flex-col items-end gap-[10px] self-stretch">
          <LoginButton url={naverUrl} imgSrc="/images/login/naver.svg" alt="네이버 로그인" />
          <LoginButton url={kakaoUrl} imgSrc="/images/login/kakao.svg" alt="카카오 로그인" />
        </div>
      </div>
    </div>
  )
}

function LoginButton({ url = '', imgSrc = '', alt = '' }) {
  return (
    <Link href={url} className="m-auto h-[48px] w-[322px]">
      <NextImg src={imgSrc} alt={alt} />
    </Link>
  )
}
