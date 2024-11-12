'use client'
import { GoLock } from 'react-icons/go'

import {
  googleImgUrl,
  googleUrl,
  kakaoImgUrl,
  kakaoUrl,
  naverImgUrl,
  naverUrl,
  youtubeImgUrl,
  youtubeUrl,
} from '@/src/common/const/login'
import NextImg from '@/src/common/utils/NextImg'
import AddAuthContainer from '../AddAuthContainer'

export default function GetLoginAuth({ name }: { name: string }) {
  console.log(name)
  return (
    <AddAuthContainer title="로그인 인증" subTitle="로그인을 통하여 회원 정보를 인증받을 수 있어요." icon={<GoLock />}>
      {name === '네이버' && (
        <a href={naverUrl} className="flex items-center gap-1">
          <div className="h-5 w-5">
            <NextImg src={naverImgUrl} alt="네이버" />
          </div>
          <p>네이버 로그인</p>
        </a>
      )}
      {name === '카카오' && (
        <a href={kakaoUrl} className="flex items-center gap-1">
          <div className="h-5 w-5">
            <NextImg src={kakaoImgUrl} alt="카카오" />
          </div>
          <p>카카오 로그인</p>
        </a>
      )}
      {name === '구글' && (
        <a
          href={googleUrl}
          className="flex items-center gap-3 rounded-md border border-solid border-gray-200 bg-white px-6 py-3 shadow-md transition duration-300 ease-in-out hover:bg-gray-100"
        >
          <div className="h-6 w-6">
            <NextImg src={googleImgUrl} alt="Google" styles=" object-contain" />
          </div>
          <span className="text-lg font-semibold">구글 로그인</span>
        </a>
      )}
      {name === '유튜브' && (
        <a href={youtubeUrl} className="flex items-center gap-1">
          <div className="h-5 w-5">
            <NextImg src={youtubeImgUrl} alt="네이버" />
          </div>
          <p>유튜브 로그인</p>
        </a>
      )}
    </AddAuthContainer>
  )
}
