import NextImg from '@/src/common/utils/NextImg'
import Link from 'next/link'

// 네이버 로그인 URL
const naverUrl =
  'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
  process.env.NEXT_PUBLIC_NAVER_ID +
  '&state=STATE_STRING&redirect_uri=' +
  process.env.NEXT_PUBLIC_NAVER_CALLBACK +
  '&state=1234'

// 카카오 로그인 URL
const kakaoUrl =
  'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=' +
  process.env.NEXT_PUBLIC_KAKAO_ID +
  '&redirect_uri=' +
  process.env.NEXT_PUBLIC_KAKAO_CALLBACK

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center text-white font-kr">
      <div className="w-[440px] max-w-md rounded-3xs bg-white shadow-loginBox flex flex-col pb-[34px] gap-[34px]">
        <div className="self-stretch rounded-t-3xs rounded-b-none bg-blue-primary flex flex-col items-center py-10 px-5 gap-[10px] ">
          <div className="flex py-0 px-7">
            <h1 className="relative text-inherit tracking-[-0.01em] leading-9 text-large font-bold font-inherit inline-block ">
              PEEPS
            </h1>
          </div>
          <div className="relative font-normal text-micro ">우리들만의 커뮤니티, 핍스</div>
        </div>
        {/* 로그인 버튼 섹션 */}
        <div className="self-stretch w-full flex flex-col items-end gap-[10px]">
          <LoginButton url={naverUrl} imgSrc="/images/login/naver.svg" alt="네이버 로그인" />
          <LoginButton url={kakaoUrl} imgSrc="/images/login/kakao.svg" alt="카카오 로그인" />
        </div>
      </div>
    </div>
  )
}

function LoginButton({ url = '', imgSrc = '', alt = '' }) {
  return (
    <Link href={url} className="w-full h-[40px]">
      <NextImg src={imgSrc} alt={alt} />
    </Link>
  )
}
