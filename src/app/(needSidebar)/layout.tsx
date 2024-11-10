import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import WrapperForSideBarLayout from './_components/WrapperForSideBarLayout'
import { getLoginUserData } from '@/src/common/api/user'

export default async function Sidebarlayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({ queryKey: ['userData', { type: 'login' }], queryFn: getLoginUserData })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <WrapperForSideBarLayout>{children}</WrapperForSideBarLayout>
    </HydrationBoundary>
  )
}
