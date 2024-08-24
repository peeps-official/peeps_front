import { axiosWithAuth } from '@/src/common/api/instance'
import { getPossibleBadge, makeBadge } from '@/src/common/api/userBadge'
import { Input, InputBtn } from '@/src/common/components/Input/Input'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useContext, useRef } from 'react'
import { useAddAuth } from '../AddAuthContainer'

export type StepProps = {
  step: number
  setStep: (step: number) => void
}

/**
 * @description 이메일 입력 컴포넌트
 */
export function EmailInput({ step, setStep }: StepProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const { isPending: isSendEmailPending, mutate } = useMutation({
    mutationFn: async (email: string) =>
      await axiosWithAuth.post(`/verify/mailer/confirm`, {
        email: email,
      }),
    onSuccess(data, variables, context) {
      alert('인증번호가 발송되었습니다.')
      setStep(1)
    },
  })

  const disabled = isSendEmailPending || step >= 1
  const btnTitle = (!disabled && '인증하기') || (isSendEmailPending && '전송 중') || '전송 완료'

  return (
    <div>
      <Input title="이메일" ref={inputRef} disabled={disabled} type="email">
        <InputBtn
          disabled={disabled}
          title={btnTitle}
          onClick={async (e) => {
            e.preventDefault()
            if (inputRef && inputRef.current) {
              const email: string = inputRef.current.value
              mutate(email)
            }
          }}
        />
      </Input>
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
    onSuccess(data, variables, context) {
      alert('인증이 완료되었습니다.')
      setStep(2)
    },
  })

  const disabled = isConfirmNumberPending || step >= 2

  return (
    <div>
      <Input title="인증번호" ref={confirmNumberInput} disabled={disabled}>
        <InputBtn
          title="확인"
          disabled={disabled}
          onClick={async (e) => {
            e.preventDefault()
            if (confirmNumberInput && confirmNumberInput.current) {
              const confirmNumber: string = confirmNumberInput.current.value
              mutate(confirmNumber)
            }
          }}
        />
      </Input>
    </div>
  )
}

/**
 * @description 뱃지 생성 컴포넌트
 */
export function MakableBadgeInfo({ step, setStep }: StepProps) {
  const { isSpread, setIsSpread } = useAddAuth()
  const { isSuccess: ispossibleBadgeSuccess, data: possibleBadge } = useQuery({
    queryKey: ['admin', 'badge'],
    queryFn: async () => await getPossibleBadge(),
  })

  return (
    <div className="mt-[20px]">
      {possibleBadge && possibleBadge.id !== -1 && (
        <>
          <p className="mb-[.5rem]">인증 가능 뱃지</p>
          <div>
            {Object.entries(possibleBadge).map(([key, value]) => (
              <div key={key}>
                <strong>{key}</strong>: {value}
              </div>
            ))}
          </div>
        </>
      )}
      <button
        className="blueBtn w-full text-center"
        onClick={async () => {
          const data = await makeBadge()

          if (data) {
            console.log('data: ', data)
            alert('뱃지가 생성되었습니다!')
            setStep(0)
            setIsSpread(false)
          }
        }}
      >
        뱃지 만들기
      </button>
    </div>
  )
}
