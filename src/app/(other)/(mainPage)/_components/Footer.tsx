'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { OnlyLogedInUserDataAtom } from '@/src/common/recoil/userAtom'
import { useRecoilValue } from 'recoil'

export default function Footer() {
  const setUserData = useRecoilValue(OnlyLogedInUserDataAtom)

  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; PEEPS. All Rights Reserved. </p>
        {setUserData?.user_seq && (
          <button
            className="mt-2 text-gray-400"
            onClick={async () => {
              const res = confirm('정말로 회원탈퇴를 하시겠습니까?')
              if (!res) return

              await axiosWithAuth.delete('login').then(() => {
                if (window) window.location.href = '/'
              })
            }}
          >
            회원탈퇴
          </button>
        )}
        <div className="mt-4 flex justify-center space-x-4"></div>
      </div>
    </footer>
  )
}
