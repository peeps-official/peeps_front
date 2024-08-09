import { PopupProfile_T } from '@/src/common/types/user'
import NextImg from '@/src/common/utils/NextImg'

type PopupProfileProps = {
  profile: PopupProfile_T
}

export default function ProfileBox({ profile }: PopupProfileProps) {
  const { user_name, profileMessage, profile_img, mainBadge, phone, email, url, addr } =
    profile
  return (
    <div className="flex gap-[14px] rounded-[8px] shadow-popupBox w-full px-[10px] py-[17px]">
      <div className="relative w-[114px] h-[114px] rounded-[5px] overflow-hidden">
        <NextImg
          src={profile_img ? profile_img : '/images/default_profile.png'}
          alt="profile"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between w-full">
          <p className="kr-normal-18">{user_name}</p>
          <div className="w-[20px] h-[20px]">
            <NextImg src={mainBadge.image} alt="main badge" />
          </div>
        </div>
        <div className="flex flex-col gap-[12px] w-full text-left kr-normal-12">
          <div>{profileMessage}</div>
          <div className="w-full ">
            <DetailInfo src="/images/icons/phone.svg" alt="phone icon" data={phone} />
            <DetailInfo src="/images/icons/mail.svg" alt="mail icon" data={email} />
            <DetailInfo src="/images/icons/globe.svg" alt="globe icon" data={url} />
            <DetailInfo src="/images/icons/map.svg" alt="map icon" data={addr} />
          </div>
        </div>
      </div>
    </div>
  )
}

type DetailInfoProps = {
  src: string
  alt: string
  data: string
}

function DetailInfo({ src, alt, data }: DetailInfoProps) {
  return (
    <div className="h-[1.6em] py-[0.3em] flex justify-start	 items-center relative gap-[0.5em] pr-[2em]">
      <div className="w-[1em] h-[1em]">
        <NextImg alt={alt} src={src} />
      </div>
      <span className="w-[12rem] truncate">{data}</span>
    </div>
  )
}
