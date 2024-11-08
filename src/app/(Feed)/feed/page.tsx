import { getLoginUserData } from '@/src/common/api/user'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import CommentInput from '../../(userPage)/[user_seq]/_components/Tabs/Feed/CommentInput'
import DataWrapperForFeed from './_components/DataWrapperForFeed'
import UserFeed from './_components/UserFeed'

export default async function page() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({ queryKey: ['userData', { type: 'login' }], queryFn: getLoginUserData })

  const dehydratedState = dehydrate(queryClient)
  return (
    <HydrationBoundary state={dehydratedState}>
      <DataWrapperForFeed>
        <div className="mx-auto min-w-[420px] max-w-[640px] p-1">
          <CommentInput />
          <UserFeed />
        </div>
      </DataWrapperForFeed>
    </HydrationBoundary>
  )
}
