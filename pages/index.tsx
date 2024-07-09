import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import DataWrapperForMainPage from '@/components/main/DataWrapperForMainPage'
import { fetchUserProfileData } from '@/common/api/mypage'
import { uerDataState } from '@/common/recoil/userAtom'

export default function Main() {
  const [recoilData, setRecoilData] = useRecoilState(uerDataState)
  const router = useRouter()

  const { isSuccess, isError, error, data } = useQuery({
    queryKey: ['login'],
    queryFn: () => fetchUserProfileData(),
  })

  useEffect(() => {
    if (isSuccess) {
      console.log(data)
      setRecoilData(data)
      router.push(`${data.id}/mypage`)
    }

    if (isError) {
      console.log(error.message)
      router.push('/login')
    }
  }, [isSuccess, error])

  return (
    <DataWrapperForMainPage>
      <div className="flex items-center justify-center w-full h-full bg-gray-10">
        <div className="text-black text-bold text-large">🛠️ 공사중 🛠️</div>
      </div>
    </DataWrapperForMainPage>
  )
}
