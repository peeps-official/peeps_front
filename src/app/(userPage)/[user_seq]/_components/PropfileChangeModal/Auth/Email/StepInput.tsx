import { axiosWithAuth } from '@/src/common/api/instance'
import { getPossibleBadge, makeBadge } from '@/src/common/api/userBadge'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRef } from 'react'

type StepProps = {
  step: number
  setStep: (step: number) => void
}

/**
 * @description 이메일 입력 컴포넌트
 */
export function EmailInput({ step, setStep }: StepProps) {
  const emailInput = useRef<HTMLInputElement>(null)

  const { isPending: isSendEmailPending, mutate } = useMutation({
    mutationFn: async (email: string) =>
      await axiosWithAuth.post(`/verify/mailer/confirm`, {
        email: email,
      }),
    onSuccess() {
      alert('인증번호가 발송되었습니다.')
      setStep(1)
    },
  })

  return (
    <div className="mt-[20px]">
      <p>이메일</p>
      <input
        ref={emailInput}
        disabled={isSendEmailPending || step >= 1}
        type="email"
        className="border-[1px] border-solid border-[#DBDFE4] rounded-[5px]"
      />
      <button
        className={`blueBtn`}
        disabled={isSendEmailPending || step >= 1}
        onClick={async (e) => {
          e.preventDefault()
          if (emailInput && emailInput.current) {
            const email: string = emailInput.current.value
            mutate(email)
          }
        }}
      >
        인증하기
      </button>
    </div>
  )
}

/**
 * @description 인증번호 입력 컴포넌트
 */
export function ConfirmNumberInput({ step, setStep }: StepProps) {
  const confirmNumberInput = useRef<HTMLInputElement>(null)

  const { isPending: isConfirmNumberPending, mutate } = useMutation({
    mutationFn: async (confirmNumber: string) =>
      await axiosWithAuth.get(`/verify/mailer/check/?token=${confirmNumber}`),
    onSuccess() {
      alert('인증이 완료되었습니다.')
      setStep(2)
    },
  })

  return (
    <div className="mt-[20px]">
      <p>인증번호</p>
      <input
        ref={confirmNumberInput}
        type="text"
        className="border-[1px] border-solid border-[#DBDFE4] rounded-[5px]"
        disabled={isConfirmNumberPending || step >= 2}
      />
      <button
        className="blueBtn"
        onClick={async (e) => {
          e.preventDefault()
          if (confirmNumberInput && confirmNumberInput.current) {
            const confirmNumber: string = confirmNumberInput.current.value
            mutate(confirmNumber)
          }
        }}
      >
        확인
      </button>
    </div>
  )
}

/**
 * @description 뱃지 생성 컴포넌트
 */
export function MakableBadgeInfo({ step, setStep }: StepProps) {
  const { isSuccess: ispossibleBadgeSuccess, data: possibleBadge } = useQuery({
    queryKey: ['admin', 'badge'],
    queryFn: async () => await getPossibleBadge(),
  })

  return (
    <div className="mt-[20px]">
      <p>인증 가능 뱃지</p>
      <div>
        {possibleBadge &&
          Object.entries(possibleBadge).map(([key, value]) => (
            <div key={key}>
              <strong>{key}</strong>: {value}
            </div>
          ))}
      </div>
      <button
        className="text-center blueBtn"
        onClick={async () => {
          const data = await makeBadge()
          console.log(data)
          if (data) {
            alert('뱃지가 생성되었습니다!')
            setStep(0)
          }
        }}
      >
        뱃지 만들기
      </button>
    </div>
  )
}
