import NextImg from '@/common/utils/NextImg'

// 로그인 버튼 스타일
const loginBtnStyle = 'w-full'

// 네이버 로그인 URL
const naverUrl =
  'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
  process.env.NAVER_ID +
  '&state=STATE_STRING&redirect_uri=' +
  process.env.NAVER_CALLBACK +
  '&state=1234'

// 카카오 로그인 URL
const kakaoUrl =
  'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=' +
  process.env.KAKAO_ID +
  '&redirect_uri=' +
  process.env.KAKAO_CALLBACK

export default function Login() {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen text-center text-white font-kr">
      <div className="w-[440px] max-w-md rounded-3xs bg-white shadow-loginBox flex flex-col pb-[34px] gap-[34px]">
        <div className="self-stretch rounded-t-3xs rounded-b-none bg-primary-blue flex flex-col items-center justify-start py-10 px-5 gap-[10px] z-[1]">
          <div className="flex flex-row items-start justify-start py-0 px-7">
            <h1 className="relative text-inherit tracking-[-0.01em] leading-9 text-large font-bold font-inherit inline-block z-[1]">
              PEEPS
            </h1>
          </div>
          <div className="relative text-micro font-normal z-[1]">
            우리들만의 커뮤니티, 핍스
          </div>
        </div>
        {/* 로그인 버튼 섹션 */}
        <div className="self-stretch w-full flex flex-col items-end justify-start gap-[10px]">
          <LoginButton
            url={naverUrl}
            imgSrc="/images/login/naver.svg"
            alt="네이버 로그인"
          />
          <LoginButton
            url={kakaoUrl}
            imgSrc="/images/login/kakao.svg"
            alt="카카오 로그인"
          />
        </div>
      </div>
    </div>
  )
}

function LoginButton({ url = '', imgSrc = '', alt = '' }) {
  return (
    <button className="cursor-pointer [border:none] self-stretch flex flex-row items-start justify-start z-[1]">
      <a href={url} className={loginBtnStyle}>
        <NextImg src={imgSrc} alt={alt} styles="h-[40px] w-full" />
      </a>
    </button>
  )
}
