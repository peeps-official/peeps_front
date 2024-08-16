'use client'

import { UserProfileStateAtom } from '@/src/common/recoil/userAtom'
import { UserProfile_T } from '@/src/common/types/user'
import { useRecoilValue } from 'recoil'
import GetEmailAuth from './Auth/Email/GetEmailAuth'

export default function ContentBadge() {
  const loginedUserData = useRecoilValue<UserProfile_T>(UserProfileStateAtom)

  // const [badgeData, setBadgeData] = useState<AuthData | null>(null)

  return (
    <div className="text-left kr-bold-14">
      <div className="">추가 인증하기</div>
      <GetEmailAuth />
    </div>
  )
}
