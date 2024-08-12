'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { UserProfileStateAtom } from '@/src/common/recoil/userAtom'
import { UserProfile_T } from '@/src/common/types/user'
import { useEffect, useRef, useState } from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { useRecoilValue } from 'recoil'

interface AuthData {
  authDay: string
  authWay: string
  content: string
  description: string
  id: number
}

export default function ContentBadge() {
  const loginedUserData = useRecoilValue<UserProfile_T>(UserProfileStateAtom)
  const [step, setStep] = useState(0)
  const emailInput = useRef<HTMLInputElement>(null)
  const confirmNumberInput = useRef<HTMLInputElement>(null)
  const [badgeData, setBadgeData] = useState<AuthData | null>(null)

  async function hello() {
    const { data: data2 } = await axiosWithAuth.get<AuthData>(`/verify/mailer/badge`)

    setBadgeData(data2)
  }

  useEffect(() => {
    hello()
  }, [step])

  return (
    <div className="text-left kr-bold-14">
      <div className="">추가 인증하기</div>
      <div className="border-[1px] border-solid px-[14px] py-[16px]">
        <div className="flex items-center">
          <MdAlternateEmail />
          <p>이메일 인증</p>
        </div>
        <div className="kr-normal-12">메일을 통해 인증을 받을 수 있어요.</div>
        <div className="mt-[20px]">
          <p>이메일</p>
          <input
            ref={emailInput}
            type="email"
            className="border-[1px] border-solid border-[#DBDFE4] rounded-[5px]"
          />
          <button
            className="blueBtn"
            onClick={async (e) => {
              e.preventDefault()
              if (emailInput && emailInput.current) {
                const email: string = emailInput.current.value
                console.log(email, typeof email)
                const { data } = await axiosWithAuth.post(`/verify/mailer/confirm`, {
                  email: email,
                })
                console.log('email data!!: ', data)
                if (data) {
                  alert('인증번호가 발송되었습니다.')
                  setStep(1)
                }
              }
            }}
          >
            인증하기
          </button>
        </div>
        {step >= 1 && (
          <div className="mt-[20px]">
            <p>인증번호</p>
            <input
              type="text"
              ref={confirmNumberInput}
              className="border-[1px] border-solid border-[#DBDFE4] rounded-[5px]"
            />
            <button
              className="blueBtn"
              onClick={async (e) => {
                e.preventDefault()
                if (confirmNumberInput && confirmNumberInput.current) {
                  console.log(confirmNumberInput.current.value)
                  const { data } = await axiosWithAuth.get(
                    `/verify/mailer/check/?token=${confirmNumberInput.current.value}`
                  )
                  if (data) {
                    console.log(data)
                    alert('인증이 완료되었습니다.')
                    hello()
                    setStep(2)
                  }
                }
              }}
            >
              인증하기
            </button>
          </div>
        )}
        {step >= 2 && (
          <div className="mt-[20px]">
            <p>인증 가능 뱃지</p>
            <div>
              {badgeData &&
                Object.entries(badgeData).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}</strong>: {value}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
