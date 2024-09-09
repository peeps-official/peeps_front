'use client'

import { OwnerProfileStateAtom } from '@/src/common/recoil/userAtom'
import { UserProfile_T } from '@/src/common/types/user'
import { useRecoilValue } from 'recoil'

const CommentInput: React.FC = () => {
  const OwnerData = useRecoilValue<UserProfile_T>(OwnerProfileStateAtom)
  return (
    <div className="flex items-center space-x-4 rounded-lg border bg-white p-4 shadow-popupBox">
      {/* Profile Avatar */}
      <img
        src={OwnerData?.user_profile_img || '/images/default_profile.png'}
        alt="Profile"
        className="h-10 w-10 rounded-full"
      />

      {/* Input Field */}
      <input
        type="text"
        placeholder="여기서 글을 작성하세요"
        className="flex-grow rounded-lg bg-gray-100 p-3 outline-none"
      />
    </div>
  )
}

export default CommentInput
