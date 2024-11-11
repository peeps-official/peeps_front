import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { handleLogout } from '../api/user'
import { LogedInUserDefaultData, OnlyLogedInUserDataAtom } from '../recoil/userAtom'
import { UserLogin_T } from '../types/user'

/**
 * @description 아래의 경우에만 사용가능합니다.
 * - LogedInUserReqDataAtom 감싸진 경우
 */

export function useLoginUser() {
  const [userData, setUserData] = useRecoilState<UserLogin_T>(OnlyLogedInUserDataAtom)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    if (userData && userData.user_seq !== '') setIsLoggedIn(true)
    else setIsLoggedIn(false)
  }, [userData])

  const logout = async () => {
    if (!userData || userData.user_seq === '') {
      alert('이미 로그아웃 된 상태입니다.')
      return
    }

    const isLogout = await handleLogout()

    if (isLogout) {
      setIsLoggedIn(false)
      setUserData(LogedInUserDefaultData.user_data)
    } else setIsLoggedIn(true)
  }

  return { logout, isLoggedIn, userData }
}
