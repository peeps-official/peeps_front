import { Metadata } from 'next'
import DataWrapperForMyPage from './_components/DataWrapperForMyPage'

import UserProfile from './_components/Profile/UserProfile'
import TabContents from './_components/TabContents/TabContents'
import Taps from './_components/Taps/Taps'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'PEEPS',
  description: 'PEEPS',
}

type MyPageProps = {
  params: {
    user_seq: string
  }
}

export default function MyPage({ params }: MyPageProps) {
  const cookieStore = cookies()
  const loginCookie = cookieStore.get('loginToken')

  return (
    <DataWrapperForMyPage pageOwnerSeq={params.user_seq} isLoginCookie={!!loginCookie}>
      <div className="flex flex-1 flex-col items-center justify-start pt-3">
        <div className="mx-[auto] flex w-full max-w-[1316px] flex-col gap-[17px] px-[23px] py-[20px]">
          <UserProfile />
          <Taps />
          <TabContents />
        </div>
      </div>
    </DataWrapperForMyPage>
  )
}
