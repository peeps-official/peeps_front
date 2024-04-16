import Head from 'next/head'
import NextImg from '../../components/utils/NextImg'

const loginBtnStyle = 'w-full hidden'

const naverUrl =
  'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
  process.env.NAVER_ID +
  '&state=STATE_STRING&redirect_uri=' +
  process.env.NAVER_CALLBACK +
  '&state=1234'

  const kakaoUrl = 
    'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${' +
    process.env.KAKAO_ID +
    '}&redirect_uri=${' +
    process.env.KAKAO_CALLBACK +
    '}'

export default function Login() {
  return (
    <div className=" w-full min-h-screen overflow-hidden flex flex-row items-center justify-center tracking-[normal] text-center text-large text-white font-bold font-kr">
      <div className="w-[460px] rounded-3xs bg-white shadow-[1px_1px_30px_rgba(0,_0,_0,_0.14)] flex flex-col items-start justify-start pt-0 px-0 pb-[34px] box-border gap-[34px] max-w-full mq440:gap-[17px_34px]">
        <div className="self-stretch h-[280px] relative rounded-3xs bg-white shadow-[1px_1px_30px_rgba(0,_0,_0,_0.14)] hidden" />
        <div className="self-stretch rounded-t-3xs rounded-b-none bg-primary-blue flex flex-col items-center justify-start py-10 px-5 box-border gap-[10px] max-w-full z-[1]">
          <div className="w-[500px] h-[140px] relative rounded-t-3xs rounded-b-none bg-primary-blue hidden max-w-full" />
          <div className="flex flex-row items-start justify-start py-0 px-7">
            <h1 className="m-0 w-[76px] relative text-inherit tracking-[-0.01em] leading-[34px] font-bold font-inherit inline-block min-w-[76px] z-[1] mq450:text-[19px] mq450:leading-[27px]">
              PEEPS
            </h1>
          </div>
          <div className="relative text-micro font-normal whitespace-pre-wrap z-[1]">
            우리들만의 커뮤니티, 핍스
          </div>
        </div>
        <div className="self-stretch h-[100px] flex flex-row items-start justify-center">
          <div className="self-stretch w-full flex flex-col items-end justify-start gap-[20px]">
            <button className="cursor-pointer [border:none] pt-[1.3px] px-[1.2px] pb-[1.5px] bg-limegreen self-stretch h-[31px] rounded-md flex flex-row items-start justify-start box-border gap-[44.4px] z-[1]">
              <div className={loginBtnStyle} />
              <NextImg
                src="/images/login/naver.svg"
                alt="네이버 로그인"
                styles="h-[40px] w-full"              
              />
            </button>
            <button className="cursor-pointer [border:none] pt-[1.3px] px-[1.2px] pb-[1.5px] bg-limegreen self-stretch h-[31px] rounded-md flex flex-row items-start justify-start box-border gap-[44.4px] z-[1]">
              <div className={loginBtnStyle} />
              <NextImg
                src="images/login/kakao.svg"
                alt="카카오 로그인"
                styles="h-[40px] w-full"              
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
