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
