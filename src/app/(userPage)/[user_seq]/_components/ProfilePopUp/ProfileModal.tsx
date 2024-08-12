'use client'
import { useState } from 'react'
import ProfileChangeModal from '../PropfileChangeModal/ProfileEditModal'
import { popUpData } from '@/src/tmp_data/dummy'
import NextImg from '@/src/common/utils/NextImg'
import ProfileBox from './ProfileBox'
import BadgeBox from './BadgeBox'

export default function ProfileModal({ setIsProfileModalOpen }: any) {
  const [isProfileEditModalOpen, setIsProfileEditModalOpen] = useState(false)
  const { profile, badges, educate, career } = popUpData

  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-modal"
      onClick={() => {
        setIsProfileModalOpen(false)
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-[90vh] overflow-y-auto bg-white rounded-[10px] flex flex-col py-[24px] px-[42px] gap-[10px]"
      >
        <div className="flex items-center justify-between w-full">
          <div className="kr-normal-24">프로필</div>
          <button onClick={() => setIsProfileEditModalOpen(true)} className="blueBtn">
            프로필 수정
          </button>
        </div>

        {isProfileEditModalOpen ? (
          <ProfileChangeModal setIsProfileEditModalOpen={setIsProfileEditModalOpen} />
        ) : (
          <div className="flex gap-[14px]">
            <div className="flex flex-col items-center gap-[15px] min-w-[368px]">
              <ProfileBox profile={profile} />
              <BadgeBox badges={badges} />
            </div>
            {/* <div className="flex flex-col gap-[10px] w-full rounded-[8px] shadow-popupBox px-[16px] py-[14px]"></div> */}
          </div>
        )}
      </div>
    </div>
  )
}
