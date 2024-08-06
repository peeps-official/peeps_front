'use client'

import { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RecoilRoot } from 'recoil'

type Props = {
  children: React.ReactNode
}

export default function DataContextProvider({ children }: Props) {
  const [showDevtools, setShowDevtools] = useState(false)
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false,
          retryOnMount: true,
          refetchOnReconnect: false,
          retry: false,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}
      />
      <RecoilRoot>{children}</RecoilRoot>
    </QueryClientProvider>
  )
}