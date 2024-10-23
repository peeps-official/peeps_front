import { axiosWithAuth } from '@/src/common/api/instance'
import { getPossibleBadge, makeBadge } from '@/src/common/api/userBadge'
import { Input, InputBtn } from '@/src/common/components/Input/Input'
import { formatDate } from '@/src/common/utils/Date/formatDate'
import NextImg from '@/src/common/utils/NextImg'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRef } from 'react'
import { useAddAuth } from '../AddAuthContainer'

export type StepProps = {
  stepData: { step: number; data: any }
  setStepData: (data: { step: number; data: any }) => void
}

/**
 * @description 이메일 입력 컴포넌트
 */
export function EmailInput({ stepData, setStepData }: StepProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const { isPending: isSendEmailPending, mutate } = useMutation({
    mutationFn: async (email: string) =>
      await axiosWithAuth.post(`/verify/mailer/confirm`, {
        email: email,
      }),
    onSuccess(data, variables, context) {
      alert('인증번호가 발송되었습니다.')
      const newData = { step: 1, data: { ...stepData.data, email: variables } }
      setStepData(newData)
    },
  })

  const disabled = isSendEmailPending || stepData.step >= 1
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
export function ConfirmNumberInput({ stepData, setStepData }: StepProps) {
  const confirmNumberInput = useRef<HTMLInputElement>(null)

  const { isPending: isConfirmNumberPending, mutate } = useMutation({
    mutationFn: async (confirmNumber: string) =>
      await axiosWithAuth.get(`/verify/mailer/check/?token=${confirmNumber}`),
    onSuccess(data, variables, context) {
      alert('인증이 완료되었습니다.')
      setStepData({ ...stepData, step: 2 })
    },
  })

  const disabled = isConfirmNumberPending || stepData.step >= 2

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

export function MakableBadgeInfo({ stepData, setStepData }: StepProps) {
  const { isSpread, setIsSpread } = useAddAuth()
  const { isSuccess: ispossibleBadgeSuccess, data: possibleBadge } = useQuery({
    queryKey: ['admin', 'badge'],
    queryFn: async () => await getPossibleBadge(stepData.data.email),
  })

  const inputRef = useRef<HTMLInputElement>(null)
  const queryClient = useQueryClient()

  function DetailInfo({ title, content }: { title: string; content: string }) {
    return (
      <div className="mt-[0.4rem] flex justify-between">
        <span className="kr-regular-12 text-[#666]">{title}</span>
        <span className="kr-bold-12">{content}</span>
      </div>
    )
  }

  return (
    <div className="mt-[20px]">
      {possibleBadge && possibleBadge.name ? (
        <>
          <p className="mb-[.5rem]">뱃지</p>
          <p className="kr-medium-12 text-[#666]">다음 뱃지를 받을 수 있어요.</p>
          <div className="mt-[1rem]">
            <div className="flex gap-[1rem]">
              <div className="h-[30px] w-[30px]">
                <NextImg src={possibleBadge.image} alt="badge" />
              </div>
              <div>
                <p className="kr-bold-15">{possibleBadge.name}</p>
                <p className="kr-medium-14 text-[#666]">인증: {possibleBadge.member_count}명</p>
              </div>
            </div>
            <div className="my-[1rem]">
              <div className="flex justify-between">
                <span className="kr-regular-12 text-[#666]">인증 날짜</span>
                <span className="kr-bold-12">{formatDate(new Date())}</span>
              </div>
              <DetailInfo title="인증 방식" content={possibleBadge.authway} />
              {possibleBadge.detail.map((detail: any) => (
                <DetailInfo key={detail.title} title={detail.title} content={detail.content} />
              ))}
            </div>
            <div className="my-[1rem]">
              <span className="kr-regular-12 mb-[0.5em] block text-[#666]">추가 설명</span>
              <input
                ref={inputRef}
                className="w-full rounded-[5px] border-[1px] border-solid border-[#e2e5ec] px-[1em] py-[0.5em]"
                type="text"
                placeholder="인증에 관한 간단한 설명을 작성할 수 있어요."
              />
            </div>
          </div>
        </>
      ) : (
        <div className="mb-4">
          <p>등록되어 있는 뱃지가 없습니다.</p>
          <p>뱃지 만들기 버튼을 클릭하시면 뱃지 등록 후 안내해드릴게요!</p>
        </div>
      )}
      <button
        className="blueBtn w-full text-center"
        onClick={async () => {
          if (!inputRef.current) return
          if (!possibleBadge) return

          const newData = {
            name: possibleBadge.name,
            authway: possibleBadge.authway,
            email: stepData.data.email,
            description: inputRef.current?.value,
          }
          const data = await makeBadge(newData)

          if (data) {
            alert('뱃지가 생성되었습니다!')
            setStepData({ step: 0, data: { ...stepData, ...data } })
            setIsSpread(false)
            queryClient.invalidateQueries({ queryKey: ['userData'] })
            queryClient.invalidateQueries({ queryKey: ['LoginUserBadgeList'] })
          }
        }}
      >
        뱃지 만들기
      </button>
    </div>
  )
}
