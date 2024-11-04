import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import DataWrapperForMyPage from './_components/DataWrapperForMyPage'

import { getLoginUserData } from '@/src/common/api/user'
import UserProfile from './_components/Profile/UserProfile'
import Tabs from './_components/Tabs/Tabs'

type MyPageProps = {
  params: {
    user_seq: string
  }
}

export default async function MyPage({ params }: MyPageProps) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({ queryKey: ['userData', { type: 'login' }], queryFn: getLoginUserData })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <DataWrapperForMyPage pageOwnerSeq={params.user_seq}>
        <div className="flex flex-1 flex-col items-center justify-start pt-3">
          <div className="mx-[auto] flex w-full max-w-[1316px] flex-col gap-[17px] px-[23px] py-[20px]">
            <UserProfile />
            <Tabs />
          </div>
        </div>
      </DataWrapperForMyPage>
    </HydrationBoundary>
  )
}
