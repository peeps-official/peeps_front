import Head from 'next/head'
import NextImg from '../../components/utils/NextImg'

const loginBtnStyle = 'w-full'

const naverUrl =
  'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
  process.env.NAVER_ID +
  '&state=STATE_STRING&redirect_uri=' +
  process.env.NAVER_CALLBACK +
  '&state=1234'

export default function Login() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <Head>
        <title>Peeps - 로그인</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-md w-full px-8 py-[56px] space-y-[56px] bg-white rounded-[10px] shadow-loginBox">
        <div>
          <h2 className="text-lg font-black text-center mb-4">PEEPS 로그인</h2>
        </div>

        <div className="space-y-[15px]">
          <div>
            <a href={naverUrl} className={loginBtnStyle}>
              <NextImg
                src="/images/login/naver.svg"
                alt="네이버 로고"
                styles="w-full h-[48px]"
              />
            </a>
          </div>
          <div>
            <a className={loginBtnStyle}>
              <NextImg
                src="images/login/kakao.svg"
                alt="카카오 로고"
                styles="h-[48px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
