import { Metadata } from 'next'
import DataWrapperForMyPage from './_components/DataWrapperForMyPage'
import MyProfileHome from './_components/MyProfileHome'
import MyProfileFeed from './_components/MyProfileFeed'
import UserProfile from './_components/Profile/UserProfile'
import Taps from './_components/Taps/Taps'

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
      <div className="flex w-full flex-1 flex-col items-center justify-center overflow-auto pt-3">
        <div className="mx-[auto] flex w-full max-w-[1316px] flex-col gap-[17px] px-[18px] py-[20px]">
          <UserProfile />
          <Taps />
          <MyProfileHome />
          <MyProfileFeed />
        </div>
      </div>
    </DataWrapperForMyPage>
  )
}
