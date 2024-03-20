import Head from 'next/head'
import NextImg from '../components/utils/NextImg'

export default function Home() {
  const loginBtnStyle =
    'flex items-center justify-center gap-[4px] py-2 px-4 rounded w-full font-bold text-[15px]'

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>Peeps - 로그인</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl font-bold text-center mb-4">Peeps 로그인</h2>
        </div>
        <div>
          <button className={loginBtnStyle + ' bg-kakao'}>
            <NextImg
              src="images/login/kakao.svg"
              alt="카카오 로고"
              styles="w-[17px] h-[30px] "
            />
            <p className="relative left-[5px]">카카오로 시작하기</p>
          </button>
        </div>
        <div>
          <button className={loginBtnStyle + ' bg-naver text-white'}>
            <NextImg
              src="/images/login/naver.png"
              alt="네이버 로고"
              styles="w-[30px] h-[30px]"
            />
            <p>네이버로 시작하기</p>
          </button>
        </div>
      </div>
    </div>
  )
}
