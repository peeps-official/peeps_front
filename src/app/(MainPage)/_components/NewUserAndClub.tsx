'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { Circle_T } from '@/src/common/types/circle'
import { Main_User_Profile_T } from '@/src/common/types/user'
import NextImg from '@/src/common/utils/NextImg'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function NewUserAndClub() {
  const [newUsers, setNewUsers] = useState<Main_User_Profile_T[]>([])
  const [newCircles, setNewCircles] = useState<Circle_T[]>([])
  const router = useRouter()

  useEffect(() => {
    ;(async function fetchNewUsers() {
      const { data } = await axiosWithAuth.get('/user')

      setNewUsers(data)
    })()
    ;(async function fetchNewCircles() {
      const { data } = await axiosWithAuth.get('/circle')

      setNewCircles(data)
    })()
  }, [])

  return (
    <div className="mx-auto w-fit py-20">
      <div className="flex flex-col items-center">
        <p className="kr-bold-20">🎉 새로운 유저</p>
        <div className="my-8 flex items-start gap-8">
          {newUsers &&
            newUsers.map((user) => (
              <button onClick={() => router.push(user.user_sep)}>
                <div className="h-20 w-20 overflow-hidden rounded-full shadow-md hover:shadow-xl">
                  <NextImg src={user.image ?? '/images/profile/profile.svg'} alt="user profile" />
                </div>
                <p className="kr-bold-14 -mb-1 mt-2 w-full">{user.nickname}</p>
              </button>
            ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <p className="kr-bold-20">🎉 새로운 써클</p>
        <div className="my-8 flex gap-8">
          {newCircles &&
            newCircles.map((circle) => (
              <button onClick={() => router.push(`circle/${circle.badge.name}`)}>
                <div className="h-20 w-20 overflow-hidden rounded-lg shadow-md hover:shadow-xl">
                  <NextImg src={circle.badge.image ?? '/images/profile/profile.svg'} alt="user profile" />
                </div>
                <p className="kr-bold-14 mt-2 w-full">{circle.badge.name}</p>
              </button>
            ))}
        </div>
      </div>
    </div>
  )
}
