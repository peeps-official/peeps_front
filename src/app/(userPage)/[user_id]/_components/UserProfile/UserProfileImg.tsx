import NextImg from '@/src/common/utils/NextImg'

export default function UserProfileImg() {
  return (
    <div className="object-cover w-24 h-24 overflow-hidden rounded-full cursor-pointer">
      <NextImg
        alt="profile image"
        src={recoilData.user_profile_image ?? '/images/profile.svg'}
      />
    </div>
  )
}
