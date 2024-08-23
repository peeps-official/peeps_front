import { Metadata } from 'next'
import DataWrapperForMyPage from './_components/DataWrapperForMyPage'
import MyProfileHome from './_components/MyProfileHome'

import UserProfile from './_components/Profile/UserProfile'
import Taps from './_components/Taps/Taps'
import TabContents from './_components/TabContents/TabContents'

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
  return (
    <DataWrapperForMyPage pageOwnerSeq={params.user_seq}>
      <div className="flex h-full min-h-[100vh] flex-1 flex-col items-center justify-start overflow-auto pt-3">
        <div className="mx-[auto] flex w-full max-w-[1316px] flex-col gap-[17px] px-[23px] py-[20px]">
          <UserProfile />
          <Taps />
          <TabContents />
        </div>
      </div>
    </DataWrapperForMyPage>
  )
}
