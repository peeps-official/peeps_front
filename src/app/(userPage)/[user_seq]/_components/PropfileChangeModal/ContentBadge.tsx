'use client'

import { OwnerProfileStateAtom } from '@/src/common/recoil/userAtom'
import { UserProfile_T } from '@/src/common/types/user'
import { useRecoilValue } from 'recoil'
import GetEmailAuth from './Auth/Email/GetEmailAuth'

export default function ContentBadge() {
  const loginedUserData = useRecoilValue<UserProfile_T>(OwnerProfileStateAtom)

  // const [badgeData, setBadgeData] = useState<AuthData | null>(null)

  return (
    <div className="kr-bold-14 text-left">
      <div className="">추가 인증하기</div>
      <GetEmailAuth />
    </div>
  )
}
