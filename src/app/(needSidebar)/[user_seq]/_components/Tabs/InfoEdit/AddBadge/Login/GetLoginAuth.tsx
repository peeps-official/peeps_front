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

export default function GetLoginAuth() {
  return (
    <AddAuthContainer title="로그인 인증" subTitle="로그인을 통하여 회원 정보를 인증받을 수 있어요." icon={<GoLock />}>
      <a href={naverUrl} className="flex items-center gap-1">
        <div className="h-5 w-5">
          <NextImg src={naverImgUrl} alt="네이버" />
        </div>
        <p>네이버 로그인</p>
      </a>
      <a href={kakaoUrl} className="flex items-center gap-1">
        <div className="h-5 w-5">
          <NextImg src={kakaoImgUrl} alt="카카오" />
        </div>
        <p>카카오 로그인</p>
      </a>
      <a href={googleUrl} className="flex items-center gap-1">
        <div className="h-5 w-5">
          <NextImg src={googleImgUrl} alt="네이버" />
        </div>
        <p>구글 로그인</p>
      </a>
      <a href={youtubeUrl} className="flex items-center gap-1">
        <div className="h-5 w-5">
          <NextImg src={youtubeImgUrl} alt="네이버" />
        </div>
        <p>유튜브 로그인</p>
      </a>
    </AddAuthContainer>
  )
}
