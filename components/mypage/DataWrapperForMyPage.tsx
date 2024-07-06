'use client'

import FetchUserProfileCom from '../fetch/UserProfileData'

interface DataWrapperForMyPageProps {
  children: React.ReactNode
}

export default function DataWrapperForMyPage({
  children,
}: DataWrapperForMyPageProps) {
  return <FetchUserProfileCom>{children}</FetchUserProfileCom>
}
